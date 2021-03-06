import { AuthDomain } from 'src/domain/AuthDomain';
import { Permission } from 'src/permissions/Permission';
import { AuthResource } from 'src/domain/AuthResource';
import { AuthRoleBinding } from 'src/domain/AuthRoleBinding';
import { AuthorizationDatasource } from 'src/datasource/AuthorizationDatasource';
import flatten from 'lodash/flatten';
import { getScopedPermissions } from 'src/domain/AuthRole';
import { consolidateScopedPermissions } from 'src/permissions/ScopedPermission';
import { AuthUser } from 'src/domain/AuthUser';

export class AuthorizationEnsure {
  constructor(
    private user: AuthUser,
    private bindings: AuthRoleBinding[],
    private datasource: AuthorizationDatasource
  ) {}

  private currentDomain: AuthDomain | undefined = undefined;

  domain(domain: AuthDomain) {
    this.currentDomain = domain;
    return this;
  }

  private resolvePermissions(domain: AuthDomain | undefined) {
    // Tutti i domini "padre" del dominio corrente permettono
    // l'accesso al dominio corrente.
    const domainsChain = domain ? this.datasource.findDomainsChain(domain) : [];
    const domainsChainIds = domainsChain.map(d => d.getAuthId());

    const permissions = this.bindings
      .filter(
        binding =>
          binding.domain == null ||
          domainsChainIds.includes(binding.domain.getAuthId())
      )
      .map(binding => getScopedPermissions(binding.role));

    return consolidateScopedPermissions(flatten(permissions));
  }

  /**
   * Controlla che il permesso fornito sia disponibile per i role
   * bindings correnti.
   */
  can(permission: string, resource?: AuthResource) {
    const domain = resource == null ? this.currentDomain : resource.getDomain();
    const permissions = this.resolvePermissions(domain);

    const grant = permissions.find(p =>
      p.grants(this.user, permission, resource)
    );
    return grant != null;
  }
}

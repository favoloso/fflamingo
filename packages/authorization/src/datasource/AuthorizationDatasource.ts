import { AuthDomain } from 'src/domain/AuthDomain';
import { AuthRoleBinding } from 'src/domain/AuthRoleBinding';
import { AuthUser } from 'src/domain/AuthUser';

/**
 * Repository che fornisce l'accesso.
 */
export interface AuthorizationDatasource {
  /**
   * Ottiene l'utente corrente.
   */
  user(): AuthUser;

  /**
   * Ottiene l'elenco dei ruoli associati all'utente in base
   * ai domini.
   */
  bindings(): AuthRoleBinding[];

  /**
   * Elenco di tutti i domini "padre" di questo dominio,
   * compreso il dominio stesso.
   */
  findDomainsChain(domain: AuthDomain): Promise<AuthDomain[]> | AuthDomain[];
}

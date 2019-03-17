import { AuthorizationDatasource } from './datasource/AuthorizationDatasource';
import { AuthorizationEnsure } from './ensure/AuthorizationEnsure';
import { Permissions } from './permissions/Permission';

type EnsureFn<T extends string> = (auth: AuthorizationEnsure<T>) => boolean;

/**
 * Gestisce l'autorizzazione
 */
export class Authorization<T extends string> {
  constructor(
    public permissions: Permissions<T>,
    private datasource: AuthorizationDatasource
  ) {}

  ensure(fn: EnsureFn<T>) {
    const ensurer = new AuthorizationEnsure(this.permissions, this.datasource);
    const allowed = fn(ensurer);
    if (!allowed) {
      throw new Error('Forbidden');
    }
  }
}

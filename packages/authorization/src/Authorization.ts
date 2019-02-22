import { AuthorizationDatasource } from './datasource/AuthorizationDatasource';
import { AuthorizationEnsure } from './ensure/AuthorizationEnsure';

type EnsureFn = (auth: AuthorizationEnsure) => boolean;

/**
 * Gestisce l'autorizzazione
 */
export class Authorization {
  constructor(private datasource: AuthorizationDatasource) {}

  ensure(fn: EnsureFn) {
    const ensurer = new AuthorizationEnsure(this.datasource);
    const allowed = fn(ensurer);
    if (!allowed) {
      throw new Error('Forbidden');
    }
  }
}

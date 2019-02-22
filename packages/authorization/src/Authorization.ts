import { AuthorizationDatasource } from './datasource/AuthorizationDatasource';

/**
 * Gestisce l'autorizzazione
 */
export class Authorization {
  constructor(private datasource: AuthorizationDatasource) {}

  ensure() {}
}

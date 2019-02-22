import { AuthDomain } from "src/domain/AuthDomain";

/**
 * Repository che fornisce l'accesso.
 */
export interface AuthorizationDatasource {
  /**
   * Elenco di tutti i domini "padre" di questo dominio,
   * compreso il dominio stesso.
   */
  findDomainsChain(domain: AuthDomain): AuthDomain[];
}
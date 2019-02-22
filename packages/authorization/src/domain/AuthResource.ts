import { AuthDomain } from './AuthDomain';

export interface AuthResource {
  getDomain(): AuthDomain;
  getOwnerId(): number | string;
}

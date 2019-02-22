import { AuthDomain } from './AuthDomain';
import { PermissionScope } from 'src/permissions/PermissionScope';

export interface AuthResource {
  getDomain(): AuthDomain;
  getOwnerId(): number | string;
}

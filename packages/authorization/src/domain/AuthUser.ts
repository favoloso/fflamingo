import { PermissionScope } from 'src/permissions/PermissionScope';
import { AuthRoleBinding } from './AuthRoleBinding';

export interface AuthUser {
  getId(): number | string;
}

import { PermissionScope } from 'src/permissions/PermissionScope';

export interface AuthUser {
  getId(): number | string;
}

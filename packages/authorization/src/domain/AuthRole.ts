import { ScopedPermission } from 'src/permissions/ScopedPermission';

export interface AuthRole {
  getPermissions(): string[];
}

export function getScopedPermissions(role: AuthRole) {
  return role.getPermissions().map(p => new ScopedPermission(p));
}

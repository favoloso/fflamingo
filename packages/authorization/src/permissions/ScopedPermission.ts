import {
  PermissionScope,
  PermissionScopes,
  isPermissionScopeStrongerThan
} from './PermissionScope';
import without from 'lodash/without';
import { AuthResource } from 'src/domain/AuthResource';
import { AuthUser } from 'src/domain/AuthUser';

export const SCOPE_SEPARATOR = ':';

export function getScope(scope: string): PermissionScope {
  if (!PermissionScopes.includes(scope as any)) {
    throw new Error(`Scope non riconosciuto: "${scope}"`);
  }
  return scope as PermissionScope;
}

export function strongerPermission(permission: ScopedPermission) {
  return (other: ScopedPermission) => {
    switch (permission.scope) {
      case 'own':
        return other.scope === 'any';
      case 'any':
        return true;
    }
  };
}

export function consolidateScopedPermissions(permissions: ScopedPermission[]) {
  return permissions.reduce((consolidated: ScopedPermission[], permission) => {
    const existing = consolidated.find(p => p.sameName(permission));

    // Nuovo permesso
    if (existing == null) {
      return [...consolidated, permission];
    }

    // Permesso vecchio più forte
    if (isPermissionScopeStrongerThan(existing.scope, permission.scope)) {
      return consolidated;
    }

    // Il permesso nuovo è più forte
    return [...without(consolidated, existing), permission];
  }, []);
}

// return permissions.filter(p => p.scope === 'own' && permissions.some())

export class ScopedPermission {
  public permission: string;
  public scope: PermissionScope;

  constructor(descriptor: string) {
    const [permission, scope] = descriptor.split(SCOPE_SEPARATOR);
    this.permission = permission;
    this.scope = getScope(scope);
  }

  sameName(other: ScopedPermission) {
    return other.permission === this.permission;
  }

  grants(user: AuthUser, permission: string, resource?: AuthResource) {
    if (this.permission !== permission) return false;

    switch (this.scope) {
      case 'any':
        return true;

      case 'own':
        return resource != null && resource.getOwnerId() === user.getId();
    }
  }

  get descriptor() {
    return `${this.permission}${SCOPE_SEPARATOR}${this.scope}`;
  }
}

export const PermissionScope = {
  Any: 'any' as 'any',
  Own: 'own' as 'own'
};

export const PermissionScopes = Object.values(PermissionScope);

type InferObjectValue<T> = T extends { [key: string]: infer V } ? V : never;

export type PermissionScope = InferObjectValue<typeof PermissionScope>;

export function isPermissionScopeStrongerThan(
  scope: PermissionScope,
  other: PermissionScope
) {
  switch (scope) {
    case 'any':
      return other === 'own';

    case 'own':
      return false;
  }
}

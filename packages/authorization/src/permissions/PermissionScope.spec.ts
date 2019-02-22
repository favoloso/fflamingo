import { isPermissionScopeStrongerThan } from './PermissionScope';

describe('PermissionScope', () => {
  test('deve ordinare correttamente gli Scope', () => {
    expect(isPermissionScopeStrongerThan('any', 'any')).toBe(false);
    expect(isPermissionScopeStrongerThan('any', 'own')).toBe(true);
    expect(isPermissionScopeStrongerThan('own', 'any')).toBe(false);
  });
});

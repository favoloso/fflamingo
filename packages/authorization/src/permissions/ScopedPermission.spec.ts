import { getScope, ScopedPermission } from './ScopedPermission';

describe('ScopedPermission', () => {
  test('deve riconoscere uno `scope` non valido', () => {
    expect(() => getScope('anyx')).toThrow();
  });

  test('deve riconoscere uno `scope` valido', () => {
    expect(getScope('own')).toEqual('own');
  });

  test('deve codificare correttamente', () => {
    const permission = new ScopedPermission('perm:any');
    expect(permission.descriptor).toEqual('perm:any');
  });
});

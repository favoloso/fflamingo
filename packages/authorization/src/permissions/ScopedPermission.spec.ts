import {
  getScope,
  ScopedPermission,
  consolidateScopedPermissions
} from './ScopedPermission';

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

describe('consolidate scoped permissions', () => {
  test('deve eliminare il permesso più debole', () => {
    const consolidated = consolidateScopedPermissions([
      new ScopedPermission('post-edit:own'),
      new ScopedPermission('post-edit:any')
    ]);
    expect(consolidated).toHaveLength(1);
    expect(consolidated[0].descriptor).toEqual('post-edit:any');
  });

  test("deve eliminare il permesso più debole se appare dopo il primo (l'ordinamento è importante)", () => {
    const consolidated = consolidateScopedPermissions([
      new ScopedPermission('post-edit:any'),
      new ScopedPermission('post-edit:own')
    ]);
    expect(consolidated).toHaveLength(1);
    expect(consolidated[0].descriptor).toEqual('post-edit:any');
  });
});

import { getScope } from './ScopedPermission';

describe('ScopedPermission', () => {
  test('deve riconoscere uno `scope` non valido', () => {
    expect(() => getScope('anyx')).toThrow();
  });

  test('deve riconoscere uno `scope` valido', () => {
    expect(getScope('own')).toEqual('own');
  });
});

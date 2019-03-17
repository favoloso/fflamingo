import { Authorization } from './Authorization';
import { permission } from './permissions/Permission';

describe('Authorization', () => {
  test("deve chiamare l'autorizzatore", async () => {
    const permissions = [permission('todo-read'), permission('todo-write')];

    const authorization = new Authorization(permissions, {
      user: () => ({ getId: () => 10 }),
      bindings: () => [],
      findDomainsChain: d => [d]
    });
    expect(() => authorization.ensure(auth => true)).not.toThrow();
    expect(() => authorization.ensure(auth => false)).toThrow();
  });
});

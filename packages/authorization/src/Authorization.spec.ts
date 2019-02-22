import { Authorization } from './Authorization';

describe('Authorization', () => {
  test("deve chiamare l'autorizzatore", async () => {
    const authorization = new Authorization({
      user: () => ({ getId: () => 10 }),
      bindings: () => [],
      findDomainsChain: d => [d]
    });
    expect(() => authorization.ensure(auth => true)).not.toThrow();
    expect(() => authorization.ensure(auth => false)).toThrow();
  });
});

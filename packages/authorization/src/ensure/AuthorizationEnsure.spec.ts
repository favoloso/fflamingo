import { AuthorizationEnsure } from './AuthorizationEnsure';

describe('AuthorizationEnsure', () => {
  const user = { getId: () => 12, getBindings: () => [] };

  describe('riconoscimento dei permessi', () => {
    const domain = { getAuthId: () => 20 };
    const role = {
      getPermissions: () => ['post-read:any', 'post-edit:own']
    };
    const bindings = [{ domain, role }];
    const datasource = {
      user: () => user,
      bindings: () => bindings,
      findDomainsChain: (d: any) => [d]
    };
    const ensurer = new AuthorizationEnsure(datasource);

    test('deve garantire un permesso `any`', () => {
      expect(ensurer.domain(domain).can('post-read')).resolves.toBe(true);
    });

    test("deve rifituare un permesso `own` se non è fornito l'owner", () => {
      expect(ensurer.domain(domain).can('post-edit')).resolves.toBe(false);
    });

    test("deve garantire un permesso `own` se l'owner della risorsa è l'utente", () => {
      expect(
        ensurer.can('post-edit', {
          getOwnerId: () => 12,
          getDomain: () => domain
        })
      ).resolves.toBe(true);
    });

    test("deve rifiutare un permesso `own` se l'owner è differente", () => {
      expect(
        ensurer.can('post-edit', {
          getOwnerId: () => 14,
          getDomain: () => domain
        })
      ).resolves.toBe(false);
    });
  });
});

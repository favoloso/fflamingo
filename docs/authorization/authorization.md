---
id: authorization
title: Autorizzazione
sidebar_label: Autorizzazione
---

Package che si occupa di gestire le autorizzazioni e i permessi, in base a un
organigramma.

## Installazione

E' necessario `typeorm` installato.

```sh
$ yarn add @fflamingo/authorization
```

## Preparazione

### `Datasource`

```tsx
const datasource: AuthorizationDatasource = {
  // ...
}
```

### Associazione al Context di *GraphQL*

```tsx
import { Authorization } from '@fflamingo/authorization';

// Nella creazione del context, fornire una nuova istanza
{
  ctx: {
    // ...
    auth: new Authorization()
  }
}
```

### Creazione dei Permessi

Per il controllo delle autorizzazioni, è necessario configurare a priori i permessi
assegnabili ad ogni ruolo.



## Controllo dei Permessi

Nei resolver GraphQL è possibile controllare i permessi necessari utilizzando il metodo `check`.

```tsx
await ctx.auth.check(auth => {
  await auth.can('edit-permission:any');
});
```

In caso di errore verrà lanciato un `ForbiddenError`
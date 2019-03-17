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

### Permessi disponibili

Il modulo di autorizzazione necessita dell'elenco dei permessi disponibili,
per fornire la validazione a compile-time (_tramite TypeScript_) e a runtime dei
permessi.

:::warning
Non è possibile utilizzare il carattere `:` all'interno delle stringhe dei permessi.
:::

```tsx
import { permission } from '@fflamingo/authorization';
const permissions = [
  permission('todo.read'),
  // I permessi possono essere divisi per attività...
  permission('todo.write')
];
```

### Datasource

Permette di interfacciare il modulo di autorizzazione con la base dati dell'app.

```tsx
const datasource: AuthorizationDatasource = {
  // Ottiene i domini padre del dominio.
  findDomainsChain(domain) {
    return [domain];
  }

  // Ottiene l'utente corrente
  user() {
    return req.user;
  }

  // Ottiene i RoleBindings per l'utente corrente
  bindings() {
    return req.user.bindings;
  }
}
```

### Associazione al Context di _GraphQL_

```tsx
import { Authorization } from '@fflamingo/authorization';

// Nella creazione del context, fornire una nuova istanza
{
  ctx: {
    // ...
    auth: new Authorization(permissions, datasource);
  }
}
```

## Controllo dei Permessi

Nei resolver GraphQL è possibile controllare i permessi necessari utilizzando il metodo `check`.
In caso di errore verrà lanciato un `ForbiddenError`

### Per Risorsa

```tsx
await ctx.auth.ensure(auth => await auth.can('todo.write', task));
```

### Per Dominio

```tsx
await ctx.auth.check(auth => await auth.domain(project).can('todo.read'));
```

### Per costruire una query

:::note Todo
Al momento non è implementato.
:::

```tsx
const domains = ctx.auth.getEnabledDomains('handle-task')
// Restituisce
[
  { domain: 'Project A', id: 123, ... },
  { domain: 'Project C', id: 134, ... }
]
```

---
id: org
title: Organigramma
sidebar_label: Organigramma
---

La struttura dell'organigramma è divisa nel seguente modo:

- Le risorse sono divise in **Domini** (`AuthDomain`).
- Ogni dominio può avere più **figli**.
- Ogni **Utente** può avere un **Ruolo** per ogni **Dominio**.
- Ad ogni **Ruolo** sono associati un insieme di **Permessi**.
- Un Ruolo assegnato ad un utente per un _Dominio_ (`AuthRoleBinding`) permette di avere accesso a quel dominio a tutti i domini figli.

:::important
In caso di Ruoli multipli per una catena di domini, i permessi vengono calcolati considerando quelli **maggiormente permessivi**.
:::

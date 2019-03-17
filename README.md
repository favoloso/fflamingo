# <img src="website/static/img/logo-fflamingo@2x.png" height="80" />

Framework per lo sviluppo di applicazioni web basato su React e GraphQL

[![CircleCI branch](https://img.shields.io/circleci/project/github/favoloso/fflamingo/master.svg)](https://circleci.com/gh/favoloso/fflamingo)
[![Travis (.com)](https://img.shields.io/travis/com/favoloso/fflamingo.svg?label=travis-ci)](https://travis-ci.com/favoloso/fflamingo)
[![Codecov](https://img.shields.io/codecov/c/github/favoloso/fflamingo.svg)](https://codecov.io/gh/favoloso/fflamingo)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/favoloso/fflamingo.svg)](https://codeclimate.com/github/favoloso/fflamingo)
[![Codefactor.io](https://www.codefactor.io/repository/github/favoloso/fflamingo/badge)](https://www.codefactor.io/repository/github/favoloso/fflamingo)
![Dependencies](https://david-dm.org/favoloso/fflamingo.svg)

## Sviluppo

- `yarn build` per compilare i sorgenti di tutte le librerie
- `yarn lint` per verificare il codice con TSLint
- `yarn check-types` per verificare che il codice TypeScript sia corretto
- `yarn test` per eseguire i test con _Jest_

### Note sui Test

Al momento l'uso di `yarn test --watch` [non è supportato](https://github.com/facebook/jest/issues/4883) all'interno dei
monorepo che utilizzano il `moduleNameMapper`.

Come soluzione è **necessario** utilizzare `yarn test --watchAll`

## Documentazione

Per visualizzare la documentazione in locale, posizionarsi nella cartella `cd ./website`.
Eseguire quindi il comando `yarn start`.

Per pubblicare la documentazione, posizionarsi in `./website` ed eseguire:

```sh
GIT_USER=<nome utente git> yarn run publish-gh-pages
```

# @fflamingo/cli

CLI per fflamingo

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@fflamingo/cli.svg)](https://npmjs.org/package/@fflamingo/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@fflamingo/cli.svg)](https://npmjs.org/package/@fflamingo/cli)
[![License](https://img.shields.io/npm/l/@fflamingo/cli.svg)](https://github.com/favoloso/fflamingo/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
  <!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @fflamingo/cli
$ fflamingo COMMAND
running command...
$ fflamingo (-v|--version|version)
@fflamingo/cli/0.0.1 darwin-x64 node-v8.11.1
$ fflamingo --help [COMMAND]
USAGE
  $ fflamingo COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`fflamingo hello [FILE]`](#fflamingo-hello-file)
- [`fflamingo help [COMMAND]`](#fflamingo-help-command)

## `fflamingo hello [FILE]`

describe the command here

```
USAGE
  $ fflamingo hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ fflamingo hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/favoloso/fflamingo/blob/v0.0.1/src/commands/hello.ts)_

## `fflamingo help [COMMAND]`

display help for fflamingo

```
USAGE
  $ fflamingo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

<!-- commandsstop -->

import yargs from 'yargs';
import { command, CommandArguments } from 'src/command';
import { runGenerator } from 'src/runGenerator';

const packageCommand = command({
  command: 'package <dir>',
  describe: 'Crea un package secondo la struttura di fflamingo',
  builder: (args: yargs.Argv<{}>) => {
    return args
      .positional('dir', {
        describe: 'La cartella in cui creare il package',
        type: 'string',
        default: '.'
      })
      .option('name', {
        alias: 'n',
        type: 'string',
        describe: 'il nome del package'
      })
      .option('bundle', {
        alias: 'b',
        type: 'string',
        choices: ['rollup', 'babel'],
        default: 'rollup',
        describe: 'compilazione di bundle con rollup o babel'
      });
  },
  handler: async args => {
    return runGenerator('package', args);
  }
});

export type PackageCommandArguments = CommandArguments<typeof packageCommand>;

export default packageCommand;

import yargs from 'yargs';
import { command } from 'src/command';
import { runGenerator } from 'src/runGenerator';

module.exports = command({
  command: 'add:package <dir>',
  describe: 'Crea un package secondo la struttura di fflamingo',
  builder: (args: yargs.Argv<{}>) =>
    args
      .positional('dir', {
        describe: 'La cartella in cui creare il package',
        type: 'string'
      })
      .option('name', {
        alias: 'n',
        type: 'string',
        describe: 'il nome del package'
      }),
  handler: async args => {
    console.log('hello!', args);
    return runGenerator('package', args);
  }
});

import yargs from 'yargs';
import { command } from 'src/command';

export default command({
  command: 'add <command>',
  describe: 'Scaffolding di componenti',
  builder: (args: yargs.Argv<{}>) => args.commandDir('add-cmds'),
  handler: args => {}
});

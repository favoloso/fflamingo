import yargs from 'yargs';
import { testCommandWith } from '../../test/testCommandWith';

describe('add command', () => {
  test('should run add command', async () => {
    const command = yargs.command(require('./add')).help();
    const output = await testCommandWith(command, 'add --help');
    expect(output.argv._).toEqual(['add']);
  });
});

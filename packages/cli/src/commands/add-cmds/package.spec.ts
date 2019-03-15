import yargs from 'yargs';
import { testCommandWith } from '../../test-utils/testCommandWith';
import { runGenerator } from 'src/runGenerator';

jest.mock('../../runGenerator', () => ({
  runGenerator: jest.fn().mockReturnValue(null)
}));

describe('package command', () => {
  test('should run command', async () => {
    const command = yargs.command(require('./package'));
    const output = await testCommandWith(
      command,
      'package . --name my-pack --bundle rollup'
    );
    expect(runGenerator).toHaveBeenCalled();
    expect(output.output).toEqual('');
    expect(output.argv.bundle).toEqual('rollup');
    expect(output.argv.name).toEqual('my-pack');
  });
});

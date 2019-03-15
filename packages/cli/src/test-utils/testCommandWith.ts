import yargs from 'yargs';

interface TestCommandResult<T> {
  output: any;
  argv: yargs.Arguments<T>;
}

/**
 * Utility to test `command` output (and argv parsing), running it with
 * `args` as CLI arguments.
 * Result is wrapped (from callback-style) to a Promise.
 */
export function testCommandWith<T>(command: yargs.Argv<T>, args: string) {
  return new Promise<TestCommandResult<T>>((resolve, reject) => {
    command.parse(
      args,
      (err: Error | undefined, argv: yargs.Arguments<T>, output: any) => {
        resolve({ output, argv });
      }
    );
  });
}

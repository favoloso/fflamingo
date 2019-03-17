import { createEnv } from 'yeoman-environment';

/**
 * Generic command to execute a yeoman generator, as defined in
 * `src/generators` folder.
 */

export async function runGenerator(
  type: string,
  generatorOptions: object = {}
) {
  const env = createEnv();

  env.register(require.resolve(`./generators/${type}`), `fflamingo:${type}`);

  await new Promise((resolve, reject) => {
    env.run(
      `fflamingo:${type}`,
      generatorOptions,
      (err: Error, results: any) => {
        if (err) reject(err);
        else resolve(results);
      }
    );
  });
}

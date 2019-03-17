import helpers from 'yeoman-test';
import path from 'path';
import fs from 'fs';

describe('package generator', () => {
  test('deve generare correttamente una libreria rollup', () => {
    return helpers
      .run(path.join(__dirname, './package'))
      .withOptions({ dir: '.' })
      .withPrompts({ name: 'test-1', author: 'LA', bundle: 'rollup' })
      .then(dir => {
        const pkg = JSON.parse(
          fs.readFileSync(path.join(dir, 'package.json'), 'utf8')
        );
        expect(pkg.name).toEqual('test-1');
        expect(pkg.author).toEqual('LA');
        expect(pkg.scripts.dev).toEqual('rollup -c -w');
        expect(fs.existsSync(path.join(dir, 'README.md'))).toBe(true);
        expect(fs.existsSync(path.join(dir, 'tsconfig.json'))).toBe(true);
        expect(fs.existsSync(path.join(dir, 'rollup.config.js'))).toBe(true);

        const rollup = fs.readFileSync(
          path.join(dir, 'rollup.config.js'),
          'utf8'
        );
        expect(rollup).toMatch(/rootMode\: 'root'/);
      });
  });

  test('deve generare correttamente una libreria babel', () => {
    return helpers
      .run(path.join(__dirname, './package'))
      .withOptions({ dir: '.' })
      .withPrompts({ name: 'test-1', author: 'LA', bundle: 'babel' })
      .then(dir => {
        const pkg = JSON.parse(
          fs.readFileSync(path.join(dir, 'package.json'), 'utf8')
        );
        expect(pkg.scripts.dev).toMatchInlineSnapshot(
          `"babel src -w -d lib --copy-files -x '.ts,.tsx'"`
        );
        expect(fs.existsSync(path.join(dir, 'rollup.config.js'))).toBe(false);
      });
  });

  test('deve riconoscere una struttura monorepo', () => {
    return helpers
      .run(path.join(__dirname, './package'))
      .inTmpDir(fp => {
        fs.writeFileSync(
          path.join(fp, 'lerna.json'),
          JSON.stringify({ version: '0.0.1' }),
          { encoding: 'utf8' }
        );
      })
      .withOptions({ dir: '.' })
      .withPrompts({ name: '@monorepo/test', author: 'LA', bundle: 'rollup' })
      .then(dir => {
        const pkg = JSON.parse(
          fs.readFileSync(path.join(dir, 'package.json'), 'utf8')
        );
        expect(pkg.scripts.dev).toMatchInlineSnapshot(`"rollup -c -w"`);
        expect(fs.existsSync(path.join(dir, 'rollup.config.js'))).toBe(true);

        const rollup = fs.readFileSync(
          path.join(dir, 'rollup.config.js'),
          'utf8'
        );
        expect(rollup).toMatch(/rootMode\: 'upward'/);
      });
  });
});

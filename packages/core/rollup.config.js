import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: './src/index.ts',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions
      }),
      commonjs(),
      babel({
        extensions,
        exclude: ['node_modules/**'],
        rootMode: 'upward',
        runtimeHelpers: true
      })
    ]
  }
];

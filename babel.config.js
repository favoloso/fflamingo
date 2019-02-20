module.exports = {
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'entry', targets: '> 0.25%, not dead' }
    ],
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import'
  ],
  babelrcRoots: [
    // Keep the root as a root
    '.',
    // Also consider monorepo packages "root" and load their .babelrc files.
    './packages/*'
  ]
};

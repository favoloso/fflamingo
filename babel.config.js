module.exports = api => {
  const isTest = api.env('test');
  const targets = isTest ? { targets: { node: 'current' } } : {};

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          ...targets
        }
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
};

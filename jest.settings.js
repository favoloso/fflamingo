module.exports = {
  // Configurazione condivisa
  shared: pkg => {
    const name = pkg.name.replace('@fflamingo/', '');
    return {
      name: pkg.name,
      displayName: name,
      rootDir: '../..',
      testPathIgnorePatterns: ['/lib/', '/node_modules/'],
      transform: {
        '^.+\\.(js|ts)x?$': '<rootDir>/utils/jest/babelJestTransformer.js'
      },
      collectCoverageFrom: [
        `<rootDir>/packages/${name}/src/**/*.{ts,js}?(x)`,
        `!<rootDir>/packages/${name}/src/**/*.{spec,test}.{ts,js}?(x)`
      ],
      testMatch: [`<rootDir>/packages/${name}/**/?(*.)+(spec|test).[jt]s?(x)`]
    };
    // setupFilesAfterEnv: ['jest-extended']
  }
};

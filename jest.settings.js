module.exports = {
  // Configurazione condivisa
  shared: {
    testPathIgnorePatterns: ['/dist/', '/node_modules/'],
    transform: {
      '^.+\\.(js|ts)x?$': '<rootDir>/../../utils/jest/babelJestTransformer.js'
    }
    // setupFilesAfterEnv: ['jest-extended']
  }
};

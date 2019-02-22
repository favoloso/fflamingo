module.exports = {
  projects: ['<rootDir>/packages/*'],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{ts,js}?(x)',
    '!<rootDir>/packages/*/src/**/*.{spec,test}.{ts,js}?(x)'
  ]
};

module.exports = {
  projects: ['<rootDir>/packages/*'],
  // testPathIgnorePatterns: ['**/lib/*'],
  collectCoverageFrom: [
    '<rootDir>/packages/*/src/**/*.{ts,js}?(x)',
    '!<rootDir>/packages/*/src/**/*.{spec,test}.{ts,js}?(x)'
  ]
};

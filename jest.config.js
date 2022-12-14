module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['./src/components/**/*.{js,jsx,ts,tsx}', '!./src/components/**/stories.{js,jsx,ts,tsx}'],
  coverageThreshold: {
    'global': {
      'lines': 80,
      'statements': 80,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.json',
    },
  },
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png)$': 'identity-obj-proxy',
  },
  transformIgnorePatterns: [
    'node_modules/(?!troublesome-dependency/.*)',
  ],
};

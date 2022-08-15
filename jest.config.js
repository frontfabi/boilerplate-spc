module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*test.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', 'src'],
  globals: {
      'ts-jest': {
          tsconfig: '<rootDir>/tsconfig.json',
      },
  },
  transformIgnorePatterns: [
      "node_modules/(?!troublesome-dependency/.*)",
  ],
}
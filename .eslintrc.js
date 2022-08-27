module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'google'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],

      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'require-jsdoc': 0,
    'max-len': ['warn', { 'code': 150 }],
    'no-var-requires': 0,
    'object-curly-spacing': ['error', 'always', {
      'objectsInObjects': false,
      'arraysInObjects': false,
    }],
    'import-helpers/order-imports': [
      'error',
      {
        groups: ['/^react$/', 'module', ['/^~/', 'parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-curly-newline': 'off',
  },
};

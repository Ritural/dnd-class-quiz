module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: ['@typescript-eslint', 'jest', 'jsx-a11y', 'react', 'prettier', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-extraneous-dependencies': [0],
    'react/no-unescaped-entities': [0],
    'import/prefer-default-export': [0],
    'max-len': 'warn',
    'quote-props': [2, 'consistent-as-needed'],
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has|should|allow|can)[A-Z]([A-Za-z0-9]?)+' }
    ],
    'react/forbid-prop-types': 'error',
    'no-underscore-dangle': ['error', { enforceInMethodNames: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/no-access-state-in-setstate': 'warn',
    'react/no-deprecated': 'error',
    'react/jsx-one-expression-per-line': [0],
    camelcase: 'warn',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-multi-comp': [0],
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'jsx-a11y/label-has-for': [0],
    'jsx-quotes': ['error', 'prefer-single'],
    'no-console': [0],
    'arrow-body-style': 'warn',
    'arrow-parens': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'only-multiline',
        objects: 'only-multiline',
        imports: 'only-multiline',
        exports: 'only-multiline',
        functions: 'only-multiline'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error'
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['src']
      }
    }
  }
};

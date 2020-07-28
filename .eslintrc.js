module.exports = {
  env: {
    es2020: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {},
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src'
      }
    }
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extenstions: ['.ts', '.tsx']
      }
    ],
    'import/prefer-default-export': 'off'
  }
};

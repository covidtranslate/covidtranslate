module.exports = {
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  plugins: ['import', 'react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    'import/resolver': {
      alias: [
        ['@components', './src/components'],
        ['@pages', './src/pages'],
        ['@posts', './src/posts'],
        ['@styles', './src/styles'],
        ['@hooks', './src/hooks'],
        ['@data', './src/data'],
      ],
    },
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}

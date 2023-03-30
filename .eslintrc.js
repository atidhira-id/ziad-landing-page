module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'next/core-web-vitals',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // override air bnb config
    indent: ['warn', 2],
    'react/prop-types': [2, {
      skipUndeclared: true,
    }],
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2],
  },
};

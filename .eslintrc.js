module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/no-cycle": "off",
    "react/no-danger": 0,
    "no-underscore-dangle": "off"
  },
};

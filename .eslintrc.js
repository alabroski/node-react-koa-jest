module.exports = {
  extends: ['eslint:recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  env: {
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2017
  }
}

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2 //禁止使用 console 默认是禁止的
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
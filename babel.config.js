module.exports = {
  compact: true,
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ],
    '@babel/react',
    '@babel/typescript'
  ],
  plugins: [
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties',
    '@babel/proposal-optional-chaining',
    '@babel/syntax-dynamic-import'
  ],
  env: {
    test: {
      plugins: ['@babel/transform-modules-commonjs', '@babel/syntax-dynamic-import']
    }
  }
};

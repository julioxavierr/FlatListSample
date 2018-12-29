const { workspaces = [] } = require('./package.json');

module.exports = {
  presets: ['@babel/preset-flow'],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-async-to-generator',
    '@babel/plugin-syntax-async-generators',
  ],
};

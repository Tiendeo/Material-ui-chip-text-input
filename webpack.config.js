var path = require('path');

const BABEL_LOADER_PLUGINS = [
  require.resolve('babel-plugin-transform-class-properties'),
  require.resolve('babel-plugin-transform-object-rest-spread'),
  require.resolve('babel-plugin-transform-regenerator'),
  require.resolve('babel-plugin-transform-runtime')
];

const jsLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  options: {
    presets: ['env', 'react'],
    plugins: BABEL_LOADER_PLUGINS
  }
};

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [jsLoader]
  },
  externals: {
    react: 'commonjs react'
  }
};

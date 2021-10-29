const path = require("path");
const {CheckerPlugin} = require('awesome-typescript-loader');
const CopyPlugin = require('copy-webpack-plugin');
const PACKAGE = require('./package.json');

// Library output details
var FILE_NAME = "index";
var LIBRARY_NAME = PACKAGE.name;

// Build, source, etc paths
var PATHS = {
  entryPoint: path.resolve(__dirname, 'src/index.ts'),
  dist: path.resolve(__dirname, 'dist')
}

// Webpack config
module.exports = {
  mode: "development",
  entry: {
    [FILE_NAME]: [PATHS.entryPoint],
  },
  devServer: {
    static: './dist',
  },
  output: {
    path: PATHS.dist,
    filename: '[name].js',
    libraryTarget: 'umd',
    library: LIBRARY_NAME,
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
    }]
  },
  plugins: [
    new CheckerPlugin(),
    new CopyPlugin(
      {
        patterns: [
          {from: 'node_modules/pixi.js/dist/browser/pixi.min.js', to: PATHS.dist},
          {from: 'index.html', to: PATHS.dist},
        ],
      }),
  ],
  externals: [
    {"pixi.js": "PIXI"},
  ]
}

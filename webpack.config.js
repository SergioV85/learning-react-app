const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');

const config = {
  entry: {
    main: `${APP_DIR}/app.js`,
  },
  output: {
    filename: 'build.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [{
      test: /(\.css)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }],
    },
    {
      test: /\.(jsx|js)?$/,
      use: [{
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['react', 'es2015'],
        },
      }],
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;

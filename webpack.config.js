const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './src');
const port = process.env.PORT || 3000;

module.exports = (env) => {
  const isProdMode = env.production;
  return {
    mode: isProdMode ? 'production' : 'development',
    devtool: isProdMode ? 'none' : 'source-map',
    entry: {
      main: `${APP_DIR}/app.tsx`,
    },
    output: {
      filename: isProdMode ? 'build.[hash].js' : 'build.js',
      path: BUILD_DIR,
    },
    module: {
      rules: [
        // CSS Loader
        {
          test: /(\.css)$/,
          use: [
            isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader?url=false',
          ],
        },
        // SCSS Loader
        {
          test: /(\.scss)$/,
          use: [
            isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        // Image Loader
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
            },
          ],
        },
        // Babel loader for JS / JSX files
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ],
        },
        // Typescript loader for TS / TSX files
        {
          test: /\.(tsx|.ts)?$/,
          exclude: /node_modules/,
          use: [ 'ts-loader' ],
        },
      ],
    },
    plugins: [ 
      new MiniCssExtractPlugin({
        filename: isProdMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProdMode ? '[id].[hash].js' : '[id].css',
      }),
      new HtmlWebpackPlugin({
        title: "React Learning App - second task",
        hash: true,
        template: `src/index.html`,
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        'assets': path.resolve(__dirname, './src/assets'),
      },
    },
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      contentBase: './dist',
    },
  };
};

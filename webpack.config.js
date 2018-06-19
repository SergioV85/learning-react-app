const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader');
const nodeExternals = require('webpack-node-externals');

const BUILD_DIR = path.resolve(__dirname, './dist');
const APP_DIR = path.resolve(__dirname, './');
const port = process.env.PORT || 3000;
const createConfig = (env) => {
  const isProdMode = env.production;

  return {
    devtool: isProdMode ? 'none' : 'source-map',
    mode: isProdMode ? 'production' : 'development',
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        'assets': path.resolve(__dirname, './src/assets'),
      },
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
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          use: [ 'awesome-typescript-loader' ],
        },
      ],
    },
    plugins: [
      new CheckerPlugin(),
      new MiniCssExtractPlugin({
        filename: isProdMode ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProdMode ? '[id].[hash].js' : '[id].css',
      }),
      new webpack.NamedModulesPlugin(),
    ],
    devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      contentBase: './dist',
    },
  };
}
class ServerMiniCssExtractPlugin extends MiniCssExtractPlugin {
  getCssChunkObject(mainChunk) {
    return {};
  }
}

module.exports = (env) => {
  const isProdMode = env.production;
  const isServer = env.platform === 'server';
  const baseConfig = createConfig(env);
  if (isServer) {
    // Server SCSS Loader
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        ServerMiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ]
    })

    return {
      ...baseConfig,
      target: 'node',
      entry: `${APP_DIR}/server/index.ts`,
      output: {
        // chunkFilename: "[name].js",
        // filename: isProdMode ? '[name].[hash].js' : '[name].js',
        filename: isProdMode ? 'server.[hash].js' : 'server.js',
        path: BUILD_DIR,
        publicPath: '/',
      },
      externals: [
        nodeExternals()
      ],
    }
  }
  // Client SCSS Loader
  baseConfig.module.rules.push({
    test: /(\.scss)$/,
    use: [
      isProdMode ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  });
  const clientPlugins = [
    new HtmlWebpackPlugin({
      title: "React Learning App",
      hash: true,
      template: `src/index.html`,
    })
  ];
  baseConfig.plugins = [
    ...baseConfig.plugins,
    ...clientPlugins
  ];

  return {
    ...baseConfig,
    target: 'web',
    entry: `${APP_DIR}/src/index.tsx`,
    output: {
      filename: isProdMode ? '[name].client.[hash].js' : '[name].client.js',
      path: BUILD_DIR,
      publicPath: '/',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -20,
            chunks: "all"
          }
        }
      }
    },
  }
}


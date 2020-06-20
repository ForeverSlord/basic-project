const webpack = require('webpack');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const projectConfig = require('../project.config');
const resolve = require('./utils/resolve');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.styl', '.vue'],
    mainFields: ['main'],
    modules: [resolve('node_modules')],
    alias: {
      '@': resolve('./src'),
      api: resolve('./src/api'),
      assets: resolve('./src/assets'),
      component: resolve('./src/component'),
      pages: resolve('./src/pages'),
      style: resolve('./src/style'),
      utils: resolve('./src/utils')
    },
    plugins: []
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        resourceQuery: /blockType=i18n/,
        type: 'javascript/auto',
        loader: '@kazupon/vue-i18n-loader'
      },
      {
        test: /\.(js|jsx|ts)$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
        options: {
          babelrc: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:7].[ext]',
            esModule: false,
            outputPath: 'images/',
            limit: 10000
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:7].[ext]',
            esModule: false,
            outputPath: 'media/',
            limit: 10000
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash:7].[ext]',
            esModule: false,
            outputPath: 'fonts/',
            limit: 10000
          }
        }
      },
      {
        test: /\.md$/,
        loader: [
          'vue-loader',
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true
            }
          }
        ]
      },

      {
        test: /\.(vue|ts|js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          fix: true,
          emitWarning: false
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      // 'process.env.NODE_DEV': JSON.stringify(process.env.NODE_DEV),
      // 'process.env.SERVER_DEV': JSON.stringify(process.env.SERVER_DEV),
      ...projectConfig.api[process.env.SERVER_DEV]
    })
  ],
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'async'
    }
  },
  output: {
    path: resolve(projectConfig.buildDir)
  }
};
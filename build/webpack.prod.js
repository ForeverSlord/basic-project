const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const pageConfig = require('./env-partial/webpack.page')
// const externalConfig = require('./env-partial/webpack.externals')
const styleConfig = require('./env-partial/webpack.style')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const prodConfig = {
    mode: 'production',
    devtool: false,
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[name].chunk.css',
      }),
    ],
  }
  
  module.exports = merge(
    commonConfig,
    pageConfig,
    // externalConfig,
    styleConfig,
    prodConfig
  )
  
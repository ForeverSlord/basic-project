const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const pageConfig = require('./env-partial/webpack.page');
// const externalConfig = require('./env-partial/webpack.externals')
const styleConfig = require('./env-partial/webpack.style');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prodConfig = {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[name].chunk.css'
    })
  ]
};

module.exports = merge(
  commonConfig,
  pageConfig,
  // externalConfig,
  styleConfig,
  prodConfig
);
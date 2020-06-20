const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const pageConfig = require('./env-partial/webpack.page');
// const externalConfig = require('./env-partial/webpack.externals');
const styleConfig = require('./env-partial/webpack.style');
const devServerConfig = require('./env-partial/webpack.devServer');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
    },
}

module.exports = merge(
    commonConfig,
    pageConfig,
    // externalConfig,
    styleConfig,
    devServerConfig,
    devConfig
)
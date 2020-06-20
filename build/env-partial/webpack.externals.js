const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const projectConfig = require('../../project.config')
const resolve = require('../utils/resolve')

commonExternals = []

module.exports = {
  plugins: [
    new HtmlWebpackExternalsPlugin({
      externals: commonExternals,
    }),
  ],
}
  
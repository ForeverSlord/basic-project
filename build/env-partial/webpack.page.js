const HtmlWebpackPlugin = require('html-webpack-plugin');

const _ = require('lodash')

const resolve = require('../utils/resolve')
const getPages = require('../utils/page')
const getData = require('../utils/process-share').getData

const pageRelativePath = './src/pages'
const faviconRelativePath = './src/favicon.ico'
const jsEntry = 'main.js'
const htmlEntry = 'index.html'

let pages = getData('pages') || getPages()

function getEntries() {
    return _.mapValues(
        _.keyBy(pages, page => page),
        page => {
            return resolve(pageRelativePath, page, jsEntry)
        }
    )
}

function getHtmlWebpackPlugins() {
    return pages.map(page => {
        return new HtmlWebpackPlugin({
            template: resolve(pageRelativePath, page, htmlEntry),
            filename: `${page}.html`,
            title: page,
            favicon: resolve(faviconRelativePath),
            chunks: [page],
        })
    })
}

module.exports = {
    entry: {
        ...getEntries(),
    },
    plugins: [
        ...getHtmlWebpackPlugins(),
    ]
}
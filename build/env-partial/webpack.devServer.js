const projectConfig = require('../../project.config');
const resolve = require('../utils/resolve');

// const SERVER_DEV = process.env.SERVER_DEV || 'development';

module.exports = {
    devServer: {
        contentBase: resolve(projectConfig.buildDir),
        open: true,
        port: projectConfig.devServer.port,
        hot: true,
    }
}
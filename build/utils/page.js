const fs = require('fs');
const resolve = require('./resolve');
const pageRelativePath = './src/pages';

module.exports = () => {
    return fs.readdirSync(resolve(pageRelativePath))
}
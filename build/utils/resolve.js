const path = require('path');

module.exports = function resolve(...filepaths) {
    return path.join(__dirname, '../..', ...filepaths)
}
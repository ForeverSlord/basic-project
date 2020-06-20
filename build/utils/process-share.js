const os = require('os');
const path = require('path');
const fs = require('fs-extra');

const getHash = require('./hash');
const hash = getHash(__filename);
const configFile = path.join(os.tmpdir(), `process-share-${hash}.json`);

if(!fs.existsSync(configFile)) {
    fs.writeJSONSync(configFile, {})
}

function getData(key) {
    const value = getConfig()[key]

    setData(key, '')
    return value
}

function setData(key, value) {
    const config = getConfig()
    config[key] = value
    fs.writeJSONSync(configFile, config)
}

function getConfig() {
    return fs.readJSONSync(configFile)
}

module.exports = {
    getData,
    setData,
}
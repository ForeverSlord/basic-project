const crypto = require('crypto')

module.exports = str => {
  return crypto
    .createHmac('sha256', 'random')
    .update(str)
    .digest('hex')
}

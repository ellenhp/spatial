const file = require('../../import/file')

module.exports = {
  ingress: file,
  record_separator: /\r?\n/,
  format: 'json',
  mapper: require('./osmium/map/place')
}

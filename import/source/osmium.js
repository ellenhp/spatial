module.exports = {
  ingress: process.stdin,
  record_separator: /\r?\n/,
  format: 'json',
  mapper: require('./osmium/map/place')
}

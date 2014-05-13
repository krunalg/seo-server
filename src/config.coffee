config =
  host: 'http://localhost'
  defaultPort: 3000
  memcached:
    enabled: true
    defaultHost: 'seo-memcache-production'
    defaultPort: 11211
    maxValue: 2097152
    connectRetries: 5
    key: '{KEY}'
  logentries:
    enabled: false
    token: 'YOUR_LOGENTRIES_TOKEN_HERE'

module.exports = config

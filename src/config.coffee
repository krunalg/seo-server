config =
  host: 'http://localhost'
  defaultPort: 3000
  memcached:
    enabled: true
    defaultHost: 'seo-memcache-production'
    defaultPort: 11211
    maxValue: 2097152
    connectRetries: 5
    key: 'moviepilot.com'
  logentries:
    enabled: false
    token: 'YOUR_LOGENTRIES_TOKEN_HERE'
  # By default GET params are being ignored.
  # Add here any params to be included in the
  # request to your server.
  getParamWhitelist: [ 'page' ]

module.exports = config

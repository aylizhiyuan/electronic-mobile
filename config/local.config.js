const baseConfig = require('./base.config')

module.exports = function (merge) {
  return merge({}, baseConfig, {
    env: {
      SERVER_BASE_URL: 'http://127.0.0.1:8080',
    },
  })
}

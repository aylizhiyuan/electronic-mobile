// eslint-disable-next-line import/no-commonjs
const baseConfig = require('./base.config')

module.exports = function (merge) {
  return merge({}, baseConfig, {
    env: {
      SERVER_BASE_URL: 'http://www.baidu.com',
    },
  })
}

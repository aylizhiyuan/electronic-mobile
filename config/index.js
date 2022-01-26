module.exports = function (merge) {
  const env = process.env.BUILD_ENV ?? 'prod'
  if (['prod', 'local'].includes(env)) {
    const config = require(`./${env}.config.js`)
    if (typeof config === 'function') {
      return config(merge)
    }
    return config
  }
  throw new Error('BUILD_ENV value must in [local,prod].')
}

if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/ciel-localstorage.js')
} else {
  module.exports = require('./dist/ciel-localstorage.common.js')
}

let env
if (process.env.NODE_ENV === 'production') {
  env = 'prod'
} else if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  env = 'dev'
}

let envConfig = require(`./config.${env}.js`)

module.exports = envConfig

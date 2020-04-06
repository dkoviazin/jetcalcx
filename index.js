'use strict'

if (process.env.NODE_ENV === 'development') {
  require('custom-env').env(true)
} else {
  require('custom-env').env()
}

console.log('AAAAAAAAAA')

const log = require('./src/lib/helpers/log')

const { startMongo, stopMongo } = require('./src/lib/services/mongo')

async function start () {
  await startMongo()
  
  
}

start().then(() => {
  log.info('server is working')
}).catch(error => {
  log.error('server init failed', error)
  process.exit(1)
})

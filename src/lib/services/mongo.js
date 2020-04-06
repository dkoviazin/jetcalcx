'use strict'
const mongoose = require('mongoose')
const log = require('../helpers/log.js')
const { MongoBus } = require('./bus.js')
const { MongoParser } = require('../helpers/mongoparser.js')

mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

const registerModels = async () => {

}

const startMongo = async () => {
  log.info('starting mongo')
  const hostname = 'localhost'
  const connectionString = `mongodb://${hostname}:${process.env.MONGO_PORT}/${process.env.MONGO_DB_NAME}`
  await mongoose.connect(connectionString, {
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 600000
  })
  await registerModels()
}

const stopMongo = async () => new Promise((resolve, reject) => {
  mongoose.connection.close((error) => {
    if (error) {
      reject(error)
    } else {
      log.info('Mongoose disconnected')
      resolve()
    }
  })
})

module.exports = {
  startMongo,
  stopMongo
}

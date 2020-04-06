'use strict'

class ConfigParser {
  constructor () {
    this.config = require('../modules/models/serverconfig.js')
    this.parse()
  }

  
}

const MongoParser = new ConfigParser()

module.exports = { MongoParser }

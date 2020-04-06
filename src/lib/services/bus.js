'use strict'

const { EventEmitter } = require('events')

const MongoBus = new EventEmitter()

module.exports = { MongoBus }

'use strict'

const mongoose = require('mongoose')

const natureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  stat_up: {
    type: String,
    required: true
  },
  stat_down: {
    type: String,
    required: true
  }
})

const Nature = mongoose.model('Nature', natureSchema)

module.exports = Nature

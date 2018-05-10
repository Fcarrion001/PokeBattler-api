'use strict'

const mongoose = require('mongoose')

const movepoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = movepoolSchema

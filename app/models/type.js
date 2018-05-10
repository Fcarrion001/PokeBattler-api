'use strict'

const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = typeSchema

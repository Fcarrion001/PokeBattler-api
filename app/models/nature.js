'use strict'

const mongoose = require('mongoose')

const natureSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "hardy",
    required: true,
    unique: true
  },
  stat_up: {
    type: String,
    default: null,
    required: true
  },
  stat_down: {
    type: String,
    default: null,
    required: true
  }
})

module.exports = natureSchema

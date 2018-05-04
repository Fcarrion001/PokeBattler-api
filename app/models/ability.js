'use strict'

const mongoose = require('mongoose')

const abilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  slot: {
    type: Number,
    required: true
  },
  isAbility: {
    type: Boolean,
    default: false,
    required: true
  },
  url: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = abilitySchema

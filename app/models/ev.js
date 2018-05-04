'use strict'

const mongoose = require('mongoose')

const evSchema = new mongoose.Schema({
  hp: {
    type: Number,
    default: 0,
    required: true
  },
  atk: {
    type: Number,
    default: 0,
    required: true
  },
  def: {
    type: Number,
    default: 0,
    required: true
  },
  spa: {
    type: Number,
    default: 0,
    required: true
  },
  spd: {
    type: Number,
    default: 0,
    required: true
  },
  spe: {
    type: Number,
    default: 0,
    required: true
  }
}, {
  timestamps: true
})

module.exports = evSchema

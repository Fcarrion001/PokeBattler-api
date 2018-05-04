'use strict'

const mongoose = require('mongoose')

const ivSchema = new mongoose.Schema({
  hp: {
    type: Number,
    default: 31,
    required: true
  },
  atk: {
    type: Number,
    default: 31,
    required: true
  },
  def: {
    type: Number,
    default: 31,
    required: true
  },
  spa: {
    type: Number,
    default: 31,
    required: true
  },
  spd: {
    type: Number,
    default: 31,
    required: true
  },
  spe: {
    type: Number,
    default: 31,
    required: true
  }
}, {
  timestamps: true
})

module.exports = ivSchema

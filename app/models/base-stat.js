'use strict'

const mongoose = require('mongoose')

const baseStatSchema = new mongoose.Schema({
  hp: {
    type: Number,
    required: true
  },
  atk: {
    type: Number,
    required: true
  },
  def: {
    type: Number,
    required: true
  },
  spa: {
    type: Number,
    required: true
  },
  spd: {
    type: Number,
    required: true
  },
  spe: {
    type: Number,
    required: true
  }
})

module.exports = baseStatSchema

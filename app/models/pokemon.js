'use strict'

const mongoose = require('mongoose')
const evSchema = require('./ev')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  evs: {
    type: evSchema,
    default: evSchema
  },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret, options) {
      const userId = (options.user && options.user._id) || false
      ret.editable = userId && userId.equals(doc._owner)
      return ret
    }
  }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon

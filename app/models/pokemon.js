'use strict'

const mongoose = require('mongoose')
const baseStatSchema = require('./base-stat')
const evSchema = require('./ev')
const ivSchema = require('./iv')
const abilitySchema = require('./ability')
const movepoolSchema = require('./movepool')
const typeSchema = require('./type')
const natureSchema = require('./nature')

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sprite: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  types: [typeSchema],
  abilities: [abilitySchema],
_nature: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  basestats: baseStatSchema,
  evs: {
    type: evSchema,
    default: evSchema
  },
  ivs: {
    type: ivSchema,
    default: ivSchema
  },
  movepool: [movepoolSchema],
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

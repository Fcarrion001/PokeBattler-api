const controller = require('lib/wiring/controller')
const models = require('app/models')
const Pokemon = models.pokemon
const Pokedex = require('pokedex-promise-v2')
const P = new Pokedex()

const setUser = require('./concerns/set-current-user')
const authenticate = require('./concerns/authenticate')
const setModel = require('./concerns/set-mongoose-model')

const search = (req, res, next) => {
  console.log('this is req.data.path', req.params)
  // pass in the path and the name as params
  // this allows this function to handle all pokeapi calls
  P.resource(`https://pokeapi.co/api/v2/${req.params.url_path}/${req.params.name}/`)
    .then(query => {
      console.log(query)
      return query
      })
    .then(query => res.json({ query }))
    .catch(err => next(err))
}
const index = (req, res, next) => {
  Pokemon.find(req.query)
    .then(pokemon => res.json({ pokemon }))
    .catch(err => next(err))
}

const show = (req, res, next) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      console.log('this is pokemon ', pokemon)
      return pokemon
    })
    .then(pokemon => res.json({
      pokemon: pokemon.toJSON({ virtuals: true, user: req.user })
    }))
    .catch(next)
}

const create = (req, res, next) => {
  const pokemon = Object.assign(req.body.pokemon, {
    _owner: req.user._id
  })
  Pokemon.create(pokemon)
  .then((pokemon) => {
    console.log('this is pokemon ', pokemon)
    return pokemon
  })
  .then(pokemon =>
    res.status(201)
      .json({
        pokemon: pokemon.toJSON({ virtuals: true, user: req.user })
      }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment.
  req.pokemon.update(req.body.pokemon)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.pokemon.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  search
}, { before: [
  { method: setUser, only: ['show', 'index'] },
  { method: authenticate, except: ['index', 'show', 'search'] },
  { method: setModel(Pokemon), only: ['show'] },
  { method: setModel(Pokemon, { forUser: true }), only: ['update', 'destroy'] }
] })

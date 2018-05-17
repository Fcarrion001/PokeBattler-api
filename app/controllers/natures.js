const controller = require('lib/wiring/controller')
const models = require('app/models')
const Nature = models.nature

const setUser = require('./concerns/set-current-user')
const authenticate = require('./concerns/authenticate')
const setModel = require('./concerns/set-mongoose-model')

const create = (req, res, next) => {

console.log(req.body)
  Nature.create(req.body.nature)
  .then((nature) => {
    console.log('this is nature ', nature)
    return nature
  })
  .then(nature =>
    res.status(201)
      .json({
        nature: nature.toJSON()
      }))
    .catch(next)
}

const index = (req, res, next) => {
  Nature.find(req.query)
    .then(nature => res.json({ nature }))
    .catch(err => next(err))
}


module.exports = controller({
  index,
  create
}, { before: [
  { method: setUser, only: ['show', 'index'] },
  { method: authenticate, except: ['index', 'show', 'search', 'create'] },
  { method: setModel(Nature), only: ['show'] },
  { method: setModel(Nature, { forUser: true }), only: ['update', 'destroy'] }
]} )

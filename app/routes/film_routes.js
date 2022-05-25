const express = require('express')
const passport = require('passport')
const Film = require('./../models/film')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// INDEX
// GET /films
router.get('/films', requireToken, (req, res, next) => {
  const filmData = req.body.film
  Film.find(filmData)
    .then((films) => {
      return films.map((films) => films.toObject())
    })
  // respond with status 200 and JSON of the examples
    .then((films) => res.status(200).json({ films: films }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /films/ID
router.get('/films/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Film.findById(req.params.id)
    .then(handle404)
  // if `findById` is successful, respond with 200 and "example" JSON
    .then((film) => res.status(200).json({ film: film.toObject() }))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /examples
router.post('/films', requireToken, (req, res, next) => {
  // set owner of new example to be current user
  req.body.film.owner = req.user.id

  Film.create(req.body.film)
  // respond to successful `create` with status 201 and JSON of new "example"
    .then((film) => {
      res.status(201).json({ film: film.toObject() })
    })
    .catch(next)
})

// UPDATE
// PATCH /films/ID
router.patch('/films/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.example.owner

  Film.findById(req.params.id)
    .then(handle404)
    .then((film) => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, film)

      // pass the result of Mongoose's `.update` to the next `.then`
      return film.updateOne(req.body.film)
    })
  // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /films/ID
router.delete('/films/:id', requireToken, (req, res, next) => {
  Film.findById(req.params.id)
    .then(handle404)
    .then((film) => {
      // throw an error if current user doesn't own `example`
      requireOwnership(req, film)
      // delete the example ONLY IF the above didn't throw
      film.deleteOne()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
  // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router

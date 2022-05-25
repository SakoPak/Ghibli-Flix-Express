const express = require('express')
const passport = require('passport')
const Favorites = require('../models/favorites')
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// add to favorite count
router.get('/films/:id', requireToken, (req, res, next) => {
  // req.body.id will be set based on the `:id` in the route
  Favorites.findById({'id': req.body.id})
    .then(handle404)
  // if `find` is successful, respond with 200 and "example" JSON
    .then((subscribe) => res.status(200).json({subscribeNumber: subscribe.length}))
  // if an error occurs, pass it to the handler
    .catch(next)
})

// create a 'favorited' film
router.post('/films', (req, res) => {
  // set owner of new fave to be current user
  req.body.fave.owner = req.user.id
  Favorites.find({
    id: req.body.id,
    userFrom: req.body.userFrom
  }).exec((err, subscribe) => {
    if (err) return res.status(400).send(err)

    let result = false
    if (subscribe.length !== 0) {
      result = true
    }

    res.status(200).json({ success: true, subscribed: result })
  })
})

// update list
// POST /addToFavorites
router.patch(
  '/films/:id',
  requireToken,
  removeBlanks,
  (req, res, next) => {
    console.log(req.body)
    delete req.body.film.owner

    const favorite = new Favorites(req.body)
    console.log(favorite)
    favorite.findById(req.params.id)
      .then(handle404)
      .then((film) => {
        requireOwnership(req, film)
        return film.updateOne(req.body.film)
      })
    // if that succeeded, return 204 and no JSON
      .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
      .catch(next)
  }
)

// delete from favorites' list
// POST /removeFromFavorites
router.delete('/films/:id', requireToken, (req, res, next) => {
  Favorites.findById({
    id: req.body.id,
    userFrom: req.body.userFrom
  })
    .then(handle404)
    .then((example) => {
      requireOwnership(req, example)
      example.deleteOne()
    })
  // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    .catch(next)
})

// get the favorited film
// POST /getFaveMovie
router.post('/getFaveMovie', (req, res) => {
  // Need to find all of the Users that I am subscribing to From Subscriber Collection
  Favorites.find({ userFrom: req.body.userFrom }).exec((err, favorites) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json({ success: true, favorites })
  })
})

module.exports = router

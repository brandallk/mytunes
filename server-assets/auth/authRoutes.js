var User = require('../models/user')
var router = require('express').Router()

// Create a new user
router.post('/auth/register', (req, res) => {
  req.body.password = User.generateHash(req.body.password)
  User.create(req.body)
    .then(user => {
      if (!user) { console.log('error1')
        return res.status(401).send({
          error: 'Invalid username and/or password'
        })
      }
      user.password = null // Don't send the (hashed) password to the front-end. Best to delete it -- but because Mongoose prevents this, null it out instead.
      req.session.uid = user._id // Save the userId into the session
      res.send(user) // Send back the User instance (with a nulled-out password value)
    })
    .catch(err => { console.log('error2', err)
      // Do not send the 'err' object to the front end. It contains too much information: Not safe to expose in production.
      res.status(401).send({
        error: 'Invalid username and/or password'
      })
    })
})

// Log in a previously-created user
router.post('/auth/login', (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Invalid username and/or password'
        })
      }
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({
          error: 'Invalid username and/or password'
        })
      }
      user.password = null
      req.session.uid = user._id
      res.send(user)
    })
    .catch(err => {
      res.status(401).send({
        error: 'Invalid username and/or password'
      })
    })
})

// Determine if a user is signed in -- and if so, send the user object back to the front end
router.get('/auth/authenticate', (req, res) => {
  User.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: "Please Login to Continue"
        })
      }
      user.password = null;
      return res.status(200).send(user)
    }).catch(err => {
      return res.status(500).send({
        error: err
      })
    })
})

// Log out a user (i.e. destroy the current user session)
router.delete('/auth/logout', (req, res) => {
  req.session.destroy()
  res.send("Successfully logged out")
})

module.exports = router
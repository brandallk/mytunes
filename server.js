var express = require('express')
var server = express()
server.set('port', process.env.PORT || 3000)

require('./server-assets/db/dbConfig') // mLab/mongo-db setup

var authRoutes = require('./server-assets/auth/authRoutes')
var userRoutes = require('./server-assets/routes/userRoutes')
var playlistRoutes = require('./server-assets/routes/playlistRoutes')
var songRoutes = require('./server-assets/routes/songRoutes')

// Set up for parsing request body and params
var bodyParser = require('body-parser')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({
  extended: true
}))

server.use(express.static(__dirname + "/www/dist"))

// Setup for cross-origin resource sharing. (Allow front end and back
// end on different servers to talk to each other.)
var cors = require('cors')
var whitelist = ['http://localhost:8080', 'https://brk-mytunes.herokuapp.com/'] // Whitelist my own front-end server. (Should be stored in environment variable before production).
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1 // Ensure only whitelisted request-origins are allowed.
    callback(null, originIsWhitelisted)
  },
  credentials: true
}
server.use(cors(corsOptions))

// Set up server session to store a signed-in user's credentials and create
// cookies for for front-end session credentials
var session = require('./server-assets/auth/session')
server.use(session)

server.use(authRoutes)

// Gateway for all following routes:
server.use('/api/*', (req, res, next) => {
  if (req.method.toLowerCase() != 'get' && !req.session.uid) { // If the user isn't signed in, but made a non-GET reqest...
    return res.status(401).send({
      error: 'Please log in to continue'
    }) // ...don't allow it.
  }
  next() // Otherwise, send the reqest on to be handled by following routes.
})

server.use('/api', userRoutes.router)
server.use('/api', playlistRoutes.router)
server.use('/api', songRoutes.router)

// If none of the above routes can handle the request: No matter what it is, send an error.
server.use('*', (err, req, res, next) => {
  res.status(400).send(err)
})

server.listen(server.get('port'), () => {
  console.log(`Server running on port ${server.get('port')}`)
})

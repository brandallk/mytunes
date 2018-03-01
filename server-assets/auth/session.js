var expressSession = require('express-session')
// The session store: Ties server sessions into the current mongo db.
var mongoStore = require('connect-mongodb-session')(expressSession)

// Details for database hosted on mLab
var user = 'mytunesadmin' // username for the db's user
var pswd = 'dogsrunningONfreeway?' // password of that db user
var connectionStr = `mongodb://${user}:${pswd}@ds012578.mlab.com:12578/mytunes` // url for the hosted mongo database

// Configure a new session store
var store = new mongoStore({
  uri: connectionStr,
  collection: 'Sessions'
})

// If the session store fires an error event, send a message to the console
store.on('error', function(err) {
  console.log('[SESSION ERROR]', err)
})

// Configure session/cookie setup
var session = expressSession({
  secret: 'TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX', // Session secret used to encode cookie strings
  cookie: {
    maxAge: 1000*60*60*24*7*52 // Cookie expiration period: 1 year (in milliseconds) 
  },
  store: store,
  resave: true,
  saveUninitialized: true
})

module.exports = session
var User = require('../models/user')
var Playlist = require('../models/playlist')
var Song = require('../models/song')

var router = require('express').Router()

router.get('/users/:userId/playlists', getPlaylistsByUser)

function getPlaylistsByUser(req, res, next) {
  Playlist.find({
      userId: req.params.userId
    })
    .then(playlists => {
      return res.send(playlists)
    })
    .catch(next)
}

// TEMPORARY FOR TESTING!!! Get all Users
// router.get('/users', getAllUsers)
// function getAllUsers(req, res, next) {
//   User.find(req.query)
//     .then(users => {
//       res.send(users)
//     })
//     .catch(next)
// }

// TEMPORARY FOR TESTING!!! Delete a User
// router.delete('/users/:userId', deleteUser)
// function deleteUser(req, res, next) {
//   User.findByIdAndRemove(req.params.userId)
//     .then(user => {
//       return res.send({
//         message: 'Sucessfully deleted a user'
//       })
//     })
//     .catch(next)
//   Playlist.deleteMany({
//       userId: req.params.userId
//     })
//     .then(() => {
//       console.log('Deleted user playlists')
//     })
//     .catch(next)
//   Song.deleteMany({
//       userId: req.params.userId
//     })
//     .then(() => {
//       console.log('Deleted user songs')
//     })
//     .catch(next)
// }

module.exports = {
  router
}
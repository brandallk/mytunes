var Playlist = require('../models/playlist')
var Song = require('../models/song')

var router = require('express').Router()

router.get('/playlists', getPlaylists)
router.get('/playlists/:playlistId', getPlaylist)
router.post('/playlists', createPlaylist)
router.put('/playlists/:playlistId', updatePlaylist)
router.delete('/playlists/:playlistId', removePlaylist)
router.get('/playlists/:playlistId/songs', getSongsByPlaylist)

function getPlaylists(req, res, next) {
  Playlist.find(req.query)
    .then(playlists => {
      return res.send(playlists)
    })
    .catch(next)
}

function getPlaylist(req, res, next) {
  Playlist.findById(req.params.playlistId)
    .then(playlist => {
      return res.send(playlist)
    })
    .catch(next)
}

function createPlaylist(req, res, next) {
  Playlist.create(req.params.body)
    .then(playlist => {
      return res.send({message: "Successfully created playlist", data: playlist})
    })
    .catch(next)
}

function updatePlaylist(req, res, next) {
  Playlist.findByIdAndUpdate(req.params.playlistId, {new: true})
    .then(playlist => {
      return res.send({message: "Successfully updated playlist", data: playlist})
    })
    .catch(next)
}

function removePlaylist(req, res, next) {
  Playlist.findByIdAndRemove(req.params.playlistId)
    .then(playlist => {
      return res.send({message: "Successfully deleted playlist"})
    })
    .catch(next)
}

function getSongsByPlaylist(req, res, next) {
  Song.find({
      playlistId: req.params.playlistId
    })
    .then(songs => {
      return res.send(songs)
    })
    .catch(next)
}

module.exports = {router}
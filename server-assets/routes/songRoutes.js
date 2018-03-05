var Song = require('../models/song')
var Playlist = require('../models/playlist')

var router = require('express').Router()

router.get('/songs', getAllSongs)
router.get('/songs/:songId', getSong)
router.post('/songs', createSong)
router.delete('/songs/:songId', removeSong)

function getAllSongs(req, res, next) {
  Song.find(req.query)
      .then(songs => {
        return res.send(songs)
      })
      .catch(next)
}

function getSong(req, res, next) {
  Song.findById(req.params.songId)
    .then(song => {
      return res.send(song)
    })
    .catch(next)
}

function createSong(req, res, next) {
  Song.create(req.body)
    .then(song => {
      res.send({message: "Successfully created song", data: song})
      return song
    })
    .then(song => {
      // console.log('song at songRoutes line 34:', song)
      return Playlist.findById(song.playlistId)
        .then(playlist => {
          return {playlist: playlist, newSongID: song._id}
        }).catch(err => {console.log('err', err)})
    })
    .then(data => {
      // console.log('data at songRoutes line 41:', data)
      playlistSongIDs = data.playlist.songIDs
      playlistSongIDs.push(data.newSongID)
      Playlist.findByIdAndUpdate(data.playlist._id, {songIDs: playlistSongIDs}, {new: true})
        .then(updatedPlaylist => {
          // console.log('Successfully updated playlist:', updatedPlaylist)
        }).catch(err => {console.log('err', err)})
    })
    .catch(err => {
      console.log('err', err)
    })
}

function removeSong(req, res, next) {
  Song.findById(req.params.songId)
    .then(song => {
      // console.log('song at songRoutes line 57:', song)
      return Playlist.findById(song.playlistId)
        .then(playlist => {
          return {playlist: playlist, removedSongID: song._id}
        }).catch(err => {console.log('err', err)})
    })
    .then(data => {
      // console.log('data at songRoutes line 64:', data)
      playlistSongIDs = data.playlist.songIDs
      playlistSongIDs.splice(playlistSongIDs.indexOf(data.removedSongID), 1)
      Playlist.findByIdAndUpdate(data.playlist._id, {songIDs: playlistSongIDs}, {new: true})
        .then(updatedPlaylist => {
          // console.log('Successfully updated playlist:', updatedPlaylist)
        }).catch(err => {console.log('err', err)})
    })
    .catch(err => {
      console.log('err', err)
    })
  Song.findByIdAndRemove(req.params.songId)
    .then(song => {
      return res.send({message: "Successfully deleted song"})
    })
    .catch(err => {
      console.log('err', err)
    })
}

module.exports = {router}
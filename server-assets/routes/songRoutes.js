var Song = require('../models/song')

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
      return res.send({message: "Successfully created song", data: song})
    })
    .catch(next)
}

function removeSong(req, res, next) {
  Song.findByIdAndRemove(req.params.songId)
    .then(song => {
      return res.send({message: "Successfully deleted song"})
    })
    .catch(next)
}

module.exports = {router}
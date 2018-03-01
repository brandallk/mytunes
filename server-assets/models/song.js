var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Song"

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    audioSrc: {
        type: String,
        required: true
    },
    artists: {
        type: Array,
        required: true
    },
    album: String,
    imgUrl: {
      type: String,
      required: true,
      default: 'http://placehold.it/200x200'
    },
    createdAt: {
        type: Number,
        required: true,
        default: Date.now()
    },
    starRating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
      required: true
    },
    userId: { // ID of the user who creates a Movie
        type: ObjectId,
        required: true,
        ref: 'User'
    },    
    playlistId: { // ID of the user who creates a Movie
      type: ObjectId,
      required: true,
      ref: 'Playlist'
  }
})

module.exports = mongoose.model(schemaName, schema)
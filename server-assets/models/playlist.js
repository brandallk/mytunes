var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = "Playlist"

var schema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
        // required: true,
        default: Date.now()
    },
    imgUrl: {
      type: String,
    //   required: true,
      default: 'http://www.freeclipart.pw/uploads/2017/06/vinyl-rerd--music-listen-vinyl-vinyl-rerd-png-html-28.png'
    },
    userId: { // ID of the user who creates a Movie
        type: ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = mongoose.model(schemaName, schema)
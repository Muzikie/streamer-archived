const mongoose = require('mongoose');

const Song = mongoose.model('Song', {
  name: {
    type: String,
    required: [true, 'Song must have a name'],
  },
  duration: {
    //seconds
    type: Number,
    default:0
  },
  genre: {
    type: Number,
    required: [true, 'Song must have a genre'],
  },
  ratingsAverage: {
    type: Number,
    default: 0,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  artistID: {
    type: Number,
    required: [true, 'Song must have an artistID'],
  },
  otherArtists: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Song

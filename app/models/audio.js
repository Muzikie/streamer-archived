const mongoose = require('mongoose');

const Audio = mongoose.model('Audio', {
  name: {
    type: String,
    required: [true, 'Audio must have a name'],
  },
  duration: {
    //seconds
    type: Number,
    default: 0,
  },
  genre: {
    type: String,
    required: [true, 'Audio must have a genre'],
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
    required: [true, 'Audio must have an artistID'],
  },
  otherArtists: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Audio;

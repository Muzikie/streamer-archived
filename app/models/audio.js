const mongoose = require('mongoose');

const Audio = mongoose.model('Audio', {
  name: {
    type: String,
    required: [true, 'Audio must have a name'],
  },
  releaseYear: {
    type: Number,
    required: [true, 'Audio must have a release year in YYYY format'],
  },
  artistName: {
    type: String,
    required: [true, 'Audio must have an artist name'],
  },
  collectionID: {
    type: String,
    required: [true, 'Audio must have a valid collectionID'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Audio must have a creator address in Lisk 32 format'],
  },
  hash: {
    type: String,
    required: [true, 'Audio must have a signed hash of its meta'],
  },
  meta: {
    type: String,
    required: [true, 'Audio must have an md5 hash of the audio file content'],
  },
  genre: {
    type: [Number],
    required: [true, 'Audio must have a genre'],
  },
  audioID: {
    type: String,
    required: [true, 'Audio must have a audio ID'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Audio;

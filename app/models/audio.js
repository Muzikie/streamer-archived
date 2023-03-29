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
  collectionID: {
    type: String,
    required: [true, 'Audio must have a valid collectionID'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Audio must have a creator address in Lisk 32 format'],
  },
  audioSignature: {
    type: String,
    required: [true, 'Audio must have a signed hash of its audioHash'],
  },
  audioHash: {
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
  fit: {
    type: [String],
    required: [false, 'Audio may have a list of featuring artists (fit)'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Audio;

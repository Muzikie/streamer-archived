const mongoose = require('mongoose');

const Collection = mongoose.model('Collection', {
  name: {
    type: String,
    required: [true, 'Collection must have a name'],
  },
  releaseYear: {
    type: Number,
    required: [true, 'Collection must have a release year in YYYY format'],
  },
  artistName: {
    type: String,
    required: [true, 'Collection must have an artist name'],
  },
  coArtists: {
    type: [String],
    default: [],
  },
  collectionType: {
    type: Number,
    required: [true, 'Collection must have a collection type 1 or 2'],
  },
  audios: {
    type: [String],
    default: [],
  },
  hash: {
    type: String,
    required: [true, 'Collection must have a signed hash of its meta'],
  },
  meta: {
    type: String,
    required: [true, 'Collection must have an md5 hash of the audio file content'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Collection must have a creator address in Lisk 32 format'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Collection;

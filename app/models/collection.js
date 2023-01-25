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
  collectionType: {
    type: Number,
    required: [true, 'Collection must have a collection type 1 or 2'],
  },
  audios: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Audio' }],
    default: [],
  },
  coverSignature: {
    type: String,
    required: [true, 'Collection must have a signed hash of its coverHash'],
  },
  coverHash: {
    type: String,
    required: [true, 'Collection must have an md5 hash of the cover photo'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Collection must have a creator address in Lisk 32 format'],
  },
  collectionID: {
    type: String,
    required: [true, 'Collection must have a collection ID'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Collection;

const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
  name: {
    type: String,
    required: [true, 'Profile must have a name'],
  },
  nickName: {
    type: String,
    required: [true, 'Profile must have a nick name'],
  },
  description: {
    type: String,
    required: [true, 'Profile must have a description'],
  },
  socialAccounts: {
    type: [{ username: String, platform: Number }],
    default: [],
  },
  avatarSignature: {
    type: String,
    required: [true, 'Profile must have a signed md5 hash of its avatar image'],
  },
  avatarHash: {
    type: String,
    required: [true, 'Profile must have an md5 hash of its avatar image'],
  },
  bannerSignature: {
    type: String,
    required: [true, 'Profile must have a signed md5 hash of its banner image'],
  },
  bannerHash: {
    type: String,
    required: [true, 'Profile must have an md5 hash of its banner image'],
  },
  profileID: {
    type: String,
    required: [true, 'Profile must have a profileID'],
  },
  creatorAddress: {
    type: String,
    required: [true, 'Profile must have a valid Lisk 32 address'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Profile;

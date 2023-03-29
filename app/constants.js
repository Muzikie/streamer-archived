const MODULES = {
  AUDIO: 'audio',
  COLLECTION: 'collection',
  PROFILE: 'profile',
  SUBSCRIPTION: 'subscription',
};
exports.MODULES = MODULES;

exports.commands = {
  CREATE: 'create',
  TRANSFER: 'transfer',
  PURCHASE: 'purchase',
  SET_ATTRIBUTES: 'setAttributes',
  DESTROY: 'destroy',
  STREAM: 'stream',
};

exports.idKeys = {
  [MODULES.AUDIO]: 'audioID',
  [MODULES.COLLECTION]: 'collectionID',
  [MODULES.PROFILE]: 'profileID',
  [MODULES.SUBSCRIPTION]: 'subscriptionID',
}

exports.WS_MESSAGES = {
  subscription_hasSubscription: 'subscription_hasSubscription',
  audio_getAccount: 'audio_getAccount',
  audio_getAudio: 'audio_getAudio',
  collection_getCollection: 'collection_getCollection',
  collection_getAccount: 'collection_getAccount',
  profile_getAccount: 'profile_getAccount',
  profile_getProfile: 'profile_getProfile',
};

exports.HTTP_MESSAGES = {
  AUDIO_EXISTS: 'Audio already exists',
  COLLECTION_EXISTS: 'Collection already exists',
  TRANSACTION_EXISTS: 'Transaction already exists',
  INVALID_SIGNATURE: 'Invalid signature',
};

exports.RESPONSE_STATUSES = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const FILE_NAMES = {
  AUDIO: 'audio',
  COVER: 'cover',
  AVATAR: 'avatar',
  BANNER: 'banner',
};

exports.FILE_NAMES = FILE_NAMES;

exports.MODULE_FILES = {
  audio: [FILE_NAMES.AUDIO],
  collection: [FILE_NAMES.COVER],
  profile: [FILE_NAMES.BANNER, FILE_NAMES.AVATAR],
  subscription: [],
};

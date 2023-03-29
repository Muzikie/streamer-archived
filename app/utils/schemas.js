/* eslint-disable max-lines */
const schemas = {
  audio: {},
  collection: {},
  profile: {},
};

schemas.audio.create = {
  $id: 'audio/create',
  title: 'CreateAsset transaction asset for audio module',
  type: 'object',
  required: [
    'name',
    'releaseYear',
    'genre',
    'collectionID',
    'owners',
    'audioSignature',
    'audioHash',
    'fit',
  ],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
      minLength: 3,
      maxLength: 40,
    },
    releaseYear: {
      dataType: 'string',
      fieldNumber: 2,
    },
    genre: {
      type: 'array',
      fieldNumber: 3,
      items: {
        dataType: 'uint32',
      },
    },
    collectionID: {
      dataType: 'bytes',
      fieldNumber: 4,
    },
    owners: {
      type: 'array',
      fieldNumber: 5,
      items: {
        $id: 'audio/create/owners',
        type: 'object',
        required: ['address', 'shares'],
        properties: {
          address: {
            dataType: 'bytes',
            fieldNumber: 1,
          },
          shares: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
        },
      },
    },
    audioSignature: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    audioHash: {
      dataType: 'bytes',
      fieldNumber: 7,
    },
    fit: {
      type: 'array',
      fieldNumber: 8,
      items: {
        dataType: 'bytes',
        format: 'lisk32',
      },
    },
  },
};

schemas.audio.destroy = {
  $id: 'audio/destroy',
  title: 'DestroyAsset transaction asset for audio module',
  type: 'object',
  required: ['audioID'],
  properties: {
    audioID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

schemas.audio.transfer = {
  $id: 'audio/transfer',
  title: 'TransferAsset transaction asset for audio module',
  type: 'object',
  required: ['audioID', 'address'],
  properties: {
    audioID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
    address: {
      dataType: 'bytes',
      format: 'lisk32',
      fieldNumber: 2,
    },
    shares: {
      dataType: 'uint32',
      fieldNumber: 3,
    },
  },
};

schemas.audio.setAttributes = {
  $id: 'audio/setAttributes',
  title: 'SetAttributesAsset transaction asset for audio module',
  type: 'object',
  required: ['name', 'releaseYear', 'genre', 'fit', 'collectionID', 'audioID'],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
      minLength: 3,
      maxLength: 40,
    },
    releaseYear: {
      dataType: 'string',
      fieldNumber: 2,
    },
    genre: {
      type: 'array',
      fieldNumber: 3,
      items: {
        dataType: 'uint32',
      },
    },
    fit: {
      type: 'array',
      fieldNumber: 4,
      items: {
        dataType: 'bytes',
        format: 'lisk32',
      },
    },
    collectionID: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    audioID: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
  },
};

schemas.audio.stream = {
  $id: 'audio/stream',
  title: 'StreamAsset transaction asset for audio module',
  type: 'object',
  required: ['audioID'],
  properties: {
    audioID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

schemas.audio.reclaim = {
  $id: 'audio/reclaim',
  title: 'ReclaimAsset transaction asset for audio module',
  type: 'object',
  required: ['id'],
  properties: {
    id: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

schemas.collection.create = {
  $id: 'collection/create',
  title: 'CreateAsset transaction asset for collection module',
  type: 'object',
  required: ['name', 'releaseYear', 'collectionType', 'coverSignature', 'coverHash'],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
      minLength: 3,
      maxLength: 40,
    },
    releaseYear: {
      dataType: 'string',
      fieldNumber: 2,
    },
    collectionType: {
      dataType: 'uint32',
      fieldNumber: 3,
    },
    coverSignature: {
      dataType: 'bytes',
      fieldNumber: 4,
    },
    coverHash: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
  },
};

schemas.collection.destroy = {
  $id: 'collection/destroy',
  title: 'DestroyAsset transaction asset for collection module',
  type: 'object',
  required: ['collectionID'],
  properties: {
    collectionID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
  },
};

schemas.collection.transfer = {
  $id: 'collection/transfer',
  title: 'TransferAsset transaction asset for collection module',
  type: 'object',
  required: ['collectionID', 'address'],
  properties: {
    collectionID: {
      dataType: 'bytes',
      fieldNumber: 1,
    },
    address: {
      dataType: 'bytes',
      format: 'lisk32',
      fieldNumber: 2,
    },
  },
};

schemas.collection.setAttributes = {
  $id: 'collection/setAttributes',
  title: 'SetAttributesAsset transaction asset for collection module',
  type: 'object',
  required: ['name', 'releaseYear', 'collectionType', 'collectionID'],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
      minLength: 3,
      maxLength: 40,
    },
    releaseYear: {
      dataType: 'string',
      fieldNumber: 2,
    },
    collectionType: {
      dataType: 'uint32',
      fieldNumber: 3,
    },
    collectionID: {
      dataType: 'bytes',
      fieldNumber: 4,
    },
  },
};

schemas.profile.create = {
  $id: 'profile/create',
  title: 'CreateAsset transaction asset for profile module',
  type: 'object',
  required: [
    'name',
    'nickName',
    'description',
    'socialAccounts',
    'avatarHash',
    'avatarSignature',
    'bannerHash',
    'bannerSignature',
  ],
  properties: {
    name: {
      dataType: 'string',
      fieldNumber: 1,
    },
    nickName: {
      dataType: 'string',
      fieldNumber: 2,
    },
    description: {
      dataType: 'string',
      fieldNumber: 3,
    },
    socialAccounts: {
      type: 'array',
      fieldNumber: 4,
      items: {
        $id: 'profile/profile/socialAccounts',
        type: 'object',
        required: ['username', 'platform'],
        properties: {
          username: {
            dataType: 'string',
            fieldNumber: 1,
          },
          platform: {
            dataType: 'uint32',
            fieldNumber: 2,
          },
        },
      },
    },
    avatarHash: {
      dataType: 'bytes',
      fieldNumber: 5,
    },
    avatarSignature: {
      dataType: 'bytes',
      fieldNumber: 6,
    },
    bannerHash: {
      dataType: 'bytes',
      fieldNumber: 7,
    },
    bannerSignature: {
      dataType: 'bytes',
      fieldNumber: 8,
    },
  },
};

module.exports = schemas;

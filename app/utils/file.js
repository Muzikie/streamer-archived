const { FILE_NAMES } = require('../constants');

exports.getTypeByName = (fileName) => {
  switch (fileName) {
    case FILE_NAMES.COVER:
    case FILE_NAMES.AVATAR:
    case FILE_NAMES.BANNER:
      return '.jpg';
    case FILE_NAMES.AUDIO:
      return '.mp3';
    default:
      throw new Error('Invalid file type');
  }
}

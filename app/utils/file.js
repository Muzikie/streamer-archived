exports.getAudioExtension = (mimetype) => {
  console.log('mimetype', mimetype);
  switch (mimetype) {
    case 'audio/mpeg':
      return '.mp3';
    case 'audio/ogg':
      return '.ogg';
    case 'audio/wav':
      return '.wav';
    default:
      throw new Error('Invalid audio file type');
  }
};

exports.getCoverExtension = (mimetype) => {
  switch (mimetype) {
    case 'image/jpeg':
      return '.jpg';
    case 'image/png':
      return '.png';
    case 'image/gif':
      return '.gif';
    default:
      throw new Error('Invalid image file type');
  }
};

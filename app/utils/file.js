exports.getTypeByName = (fileName) => {
  switch (fileName) {
    case 'cover':
    case 'avatar':
      return '.jpg';
    case 'audio':
      return '.mp3';
    default:
      throw new Error('Invalid file type');
  }
}

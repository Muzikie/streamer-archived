const Collection = require('../../models/collection');

exports.getCollection = async (req, res) => {
  try {
    const audio = await Collection.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        audios: audio,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

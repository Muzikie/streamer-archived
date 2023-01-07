const Collection = require('../../models/collection');

exports.getAllCollections = async (req, res) => {
  try {
    const audios = await Collection.find();
    res.status(200).json({
      status: 'success',
      results: audios.length,
      requestedAt: req.requestTime,
      data: {
        audios: audios,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

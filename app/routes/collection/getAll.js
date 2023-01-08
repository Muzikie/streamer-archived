const Collection = require('../../models/collection');

exports.getAllCollections = async (req, res) => {
  try {
    const data = await Collection.find();
    res.status(200).json({
      status: 'success',
      data,
      meta: {
        results: data.length,
        requestedAt: req.requestTime,
      }
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

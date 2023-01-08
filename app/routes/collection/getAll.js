const Collection = require('../../models/collection');
const { RESPONSE_STATUSES } = require('../../constants');

exports.getAllCollections = async (req, res) => {
  try {
    const data = await Collection.find();
    res.status(200).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data,
      meta: {
        results: data.length,
        requestedAt: req.requestTime,
      }
    });
  } catch (error) {
    res.status(404).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};

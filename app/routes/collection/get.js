const Collection = require('../../models/collection');
const { RESPONSE_STATUSES } = require('../../constants');

exports.get = async (req, res) => {
  try {
    const data = await Collection.find({ collectionID: req.params.id }).populate('Audio');
    res.status(200).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data,
    });
  } catch (error) {
    res.status(404).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};

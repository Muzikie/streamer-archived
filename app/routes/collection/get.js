const Collection = require('../../models/collection');
const { RESPONSE_STATUSES } = require('../../constants');

exports.getCollection = async (req, res) => {
  try {
    const data = await Collection.findById(req.params.id);
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

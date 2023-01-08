const Collection = require('../../models/collection');
const { RESPONSE_STATUSES } = require('../../constants');

exports.deleteCollection = async (req, res) => {
  try {
    await Collection.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};

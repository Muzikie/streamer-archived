const Collection = require('../../models/collection');
const { RESPONSE_STATUSES } = require('../../constants');

exports.updateCollection = async (req, res) => {
  try {
    const data = await Collection.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};

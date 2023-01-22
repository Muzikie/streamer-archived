const Profile = require('../../models/profile');
const { RESPONSE_STATUSES } = require('../../constants');

exports.update = async (req, res) => {
  try {
    const data = await Profile.updateOne({ creatorAddress: req.params.address }, req.body, {
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

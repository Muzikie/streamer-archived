const Profile = require('../../models/profile');
const { RESPONSE_STATUSES } = require('../../constants');

exports.getProfile = async (req, res) => {
  try {
    const data = await Profile.find({ creatorAddress: req.params.address });
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

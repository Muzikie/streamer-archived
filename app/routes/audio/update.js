const Audio = require('../../models/audio');
const { RESPONSE_STATUSES } = require('../../constants');

exports.updateAudio = async (req, res) => {
  try {
    const data = await Audio.findByIdAndUpdate(req.params.id, req.body, {
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

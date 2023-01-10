const Audio = require('../../models/audio');
const { RESPONSE_STATUSES } = require('../../constants');

exports.getAudio = async (req, res) => {
  try {
    const data = await Audio.find({ audioID: req.params.id });
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

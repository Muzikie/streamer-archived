const Audio = require('../../models/audio');
const { RESPONSE_STATUSES } = require('../../constants');

exports.deleteAudio = async (req, res) => {
  try {
    await Audio.findByIdAndDelete(req.params.id);
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

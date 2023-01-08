const Audio = require('../../models/audio');
const { RESPONSE_STATUSES } = require('../../constants');

exports.getAllAudios = async (req, res) => {
  try {
    const data = await Audio.find();
    res.status(200).json({
      status: RESPONSE_STATUSES.SUCCESS,
      data,
      meta: {
        results: data.length,
        requestedAt: req.requestTime,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: RESPONSE_STATUSES.ERROR,
      message: error.message,
    });
  }
};

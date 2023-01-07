const Audio = require('../../models/audio');

exports.getAllAudios = async (req, res) => {
  try {
    const audios = await Audio.find();
    res.status(200).json({
      status: 'success',
      results: audios.length,
      requestedAt: req.requestTime,
      data: {
        audios: audios,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

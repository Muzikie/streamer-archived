const Audio = require('../../models/audio');

exports.getAudio = async (req, res) => {
  try {
    const audio = await Audio.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        audios: audio,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: error.message,
    });
  }
};

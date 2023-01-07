const Audio = require('../../models/audio');

exports.createAudio = async (req, res) => {
  try {
    const newAudio = await Audio.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        audios: newAudio,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

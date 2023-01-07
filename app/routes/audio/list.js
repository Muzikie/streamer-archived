const Audio = require('../../models/audio');

exports.getAllAudios = async (req, res) => {
  console.log('berarom');
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

exports.updateAudio = async (req, res) => {
  try {
    const audio = await Audio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: {
        audios: audio,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteAudio = async (req, res) => {
  try {
    await Audio.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

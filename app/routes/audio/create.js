const md5 = require('md5');

const Audio = require('../../models/audio');
const { getAudioExtension } = require('../../utils/file');
const { AUDIOS } = require('../../../config/api');

exports.createAudio = async (req, res) => {
  try {
    const file = req.files.file;
    const audio = JSON.parse(req.body.data);

    // @todo Check if audioID is unique

    // Validate signature
    const md5Hash = md5(file.data);

    if (md5Hash !== audio.meta) {
      throw new Error('Invalid signature');
    }

    // Save file and audio
    audio.mv(`.${AUDIOS.PATH}` + audio.audioID + getAudioExtension(file.mimetype));
    const data = await Audio.create(audio);
    res.status(201).json({
      status: 'success',
      data,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

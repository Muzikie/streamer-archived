const md5 = require('md5');

const Audio = require('../../models/audio');
const { RESPONSE_STATUSES, HTTP_MESSAGES } = require('../../constants');
const { getAudioExtension } = require('../../utils/file');
const { AUDIOS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.createAudio = async (req, res) => {
  try {
    const file = req.files.file;
    const audio = JSON.parse(req.body.data);

    // Check if audioID is unique
    const audioExists = await Audio.find({ audioID: audio.audioID });
    if (audioExists.length) {
      throw new Error(HTTP_MESSAGES.AUDIO_EXISTS);
    }

    // Validate signature
    const md5Hash = md5(file.data);
    if (md5Hash !== audio.meta) {
      throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
    }

    // Save file and audio
    file.mv(`.${AUDIOS.PATH}` + audio.audioID + getAudioExtension(file.mimetype));
    const data = await Audio.create(audio);
    res.status(201).json({
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

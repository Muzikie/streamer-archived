const md5 = require('md5');

const Audio = require('../../models/audio');
const { RESPONSE_STATUSES, HTTP_MESSAGES } = require('../../constants');
const { getAudioExtension } = require('../../utils/file');
const { AUDIOS } = require('../../../config/api');

// eslint-disable-next-line max-statements
exports.create = async (req, res) => {
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
    if (md5Hash !== audio.audioHash) {
      throw new Error(HTTP_MESSAGES.INVALID_SIGNATURE);
    }

    // Save file and audio
    file.mv(`.${AUDIOS.PATH}` + audio.audioID + getAudioExtension(file.mimetype));
    const data = await Audio.create(audio);
    const collection = await Audio.find({ collectionID: audio.collectionID });
    await Audio.findByIdAndUpdate(
      audio.collectionID,
      {
        ...collection,
        audios: [
          ...collection.audios,
          data._id,
        ]
      },
      { new: true, runValidators: true },
    );
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

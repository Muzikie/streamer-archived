// Route
// eslint-disable-next-line new-cap
const audioRouter = require('express').Router(); //router

// methods
const {
  getAllAudios,
  getAudio,
  createAudio,
  updateAudio,
  deleteAudio,
} = require('./list'); ///controller
const streamController = require('./stream'); ///controller

// validators
// const {
//   listGetValidator,
//   listPostValidator,
// } = require("../../validation/audio/list");
const streamValidator = require('../../validation/audio/stream');

/**
 * @api {get} /audio/stream Stream audio file with a given id
 * @apiName StreamAudio
 * @apiGroup Audio
 * @apiSuccess {String} id Unique ID of the Audio.
 */
audioRouter.get('/stream/:audioID', streamValidator, streamController);

audioRouter.route('/:id').get(getAudio).patch(updateAudio).delete(deleteAudio);
audioRouter.route('/').get(getAllAudios).post(createAudio);

module.exports = audioRouter;

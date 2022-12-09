// Route
// eslint-disable-next-line new-cap
const audio = require('express').Router();

// methods
const stream = require('./stream');

// validators
const streamValidator = require('../../validation/audio/stream');

/**
 * @api {get} /audio/stream Stream audio file with a given id
 * @apiName StreamAudio
 * @apiGroup Audio
 *
 * @apiSuccess {String} id Unique ID of the Audio.
 */
audio.get('/:audioID', streamValidator, stream);

module.exports = audio;

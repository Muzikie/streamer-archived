// Route
const audio = require('express').Router();

// methods
const stream = require('./stream');

// validators
const Stream = require.main.require('./app/validation/audio/stream');

/**
 * @api {get} /audio/stream Stream audio file with a given id
 * @apiName StreamAudio
 * @apiGroup Audio
 *
 * @apiSuccess {String} id Unique ID of the Audio.
 */
audio.get('/:name', Stream, stream);

module.exports = audio;
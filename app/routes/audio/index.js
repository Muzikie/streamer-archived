// eslint-disable-next-line new-cap
const audioRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { stream } = require('./stream');

// validators
const streamValidator = require('../../validation/audio/stream');

// Routes
audioRouter
  .get('/stream/:id', streamValidator, stream);
audioRouter
  .route('/:id')
  .get(get);
audioRouter
  .route('/')
  .get(getAll);

module.exports = audioRouter;

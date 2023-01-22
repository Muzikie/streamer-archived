// eslint-disable-next-line new-cap
const audioRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { create } = require('./create');
const { destroy } = require('./destroy');
const { update } = require('./update');
const { stream } = require('./stream');

// validators
const streamValidator = require('../../validation/audio/stream');

// Routes
audioRouter
  .get('/stream/:id', streamValidator, stream);
audioRouter
  .route('/:id')
  .get(get)
  .delete(destroy)
  .patch(update);
audioRouter
  .route('/')
  .get(getAll)
  .post(create);

module.exports = audioRouter;

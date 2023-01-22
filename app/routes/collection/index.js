// eslint-disable-next-line new-cap
const collectionRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { getAudios } = require('./getAudios');

// validators
// @todo add validators

// Routes
collectionRouter
  .route('/:id/audios')
  .get(getAudios);
collectionRouter
  .route('/:id')
  .get(get);
collectionRouter.route('/')
  .get(getAll);

module.exports = collectionRouter;

// eslint-disable-next-line new-cap
const collectionRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { create } = require('./create');
const { destroy } = require('./destroy');
const { update } = require('./update');
const { getAudios } = require('./getAudios');

// validators
// @todo add validators

// Routes
collectionRouter
  .route('/:id/audios')
  .get(getAudios)
collectionRouter
  .route('/:id')
  .get(get)
  .delete(destroy)
  .patch(update);
collectionRouter.route('/')
  .get(getAll)
  .post(create);

module.exports = collectionRouter;

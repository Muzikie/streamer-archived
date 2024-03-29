// eslint-disable-next-line new-cap
const profileRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { getAudios } = require('./getAudios');
const { getCollections } = require('./getCollections');

// validators
// @todo add validators

// Routes
profileRouter
  .route('/:address/audios')
  .get(getAudios)
profileRouter
  .route('/:address/collections')
  .get(getCollections)
profileRouter
  .route('/:address')
  .get(get);
profileRouter.route('/')
  .get(getAll);

module.exports = profileRouter;

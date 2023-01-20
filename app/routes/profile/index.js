// eslint-disable-next-line new-cap
const profileRouter = require('express').Router(); //router

// Controllers
const { getAllProfiles } = require('./getAll');
const { getProfile } = require('./get');
const { createProfile } = require('./create');
// const { deleteProfile } = require('./delete');
const { updateProfile } = require('./update');
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
  .get(getProfile)
  // .delete(deleteProfile)
  .patch(updateProfile);
profileRouter.route('/')
  .get(getAllProfiles)
  .post(createProfile);

module.exports = profileRouter;

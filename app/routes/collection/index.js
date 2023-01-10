// eslint-disable-next-line new-cap
const collectionRouter = require('express').Router(); //router

// Controllers
const { getAllCollections } = require('./getAll');
const { getCollection } = require('./get');
const { createCollection } = require('./create');
// const { deleteCollection } = require('./delete');
const { updateCollection } = require('./update');

// validators
// @todo add validators

// Routes
collectionRouter
  .route('/:id')
  .get(getCollection)
  // .delete(deleteCollection)
  .patch(updateCollection);
collectionRouter.route('/')
  .get(getAllCollections)
  .post(createCollection);

module.exports = collectionRouter;

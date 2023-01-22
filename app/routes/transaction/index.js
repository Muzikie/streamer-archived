// eslint-disable-next-line new-cap
const transactionRouter = require('express').Router(); //router

// Controllers
const { getAll } = require('./getAll');
const { get } = require('./get');
const { create } = require('./create');
// const { destroy } = require('./destroy');
const { update } = require('./update');

// Routes
transactionRouter
  .route('/:id')
  .get(get)
  // .delete(destroy)
  .patch(update);
transactionRouter
  .route('/')
  .get(getAll)
  .post(create);

module.exports = transactionRouter;

// eslint-disable-next-line new-cap
const transactionRouter = require('express').Router(); //router

// Controllers
const { create } = require('./create');

// Routes
transactionRouter
  .route('/')
  .post(create);

module.exports = transactionRouter;

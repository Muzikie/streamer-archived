// eslint-disable-next-line new-cap
const routes = require('express').Router();
const bodyParser = require('body-parser');

// Require routes
const status = require('./status');
const audio = require('./audio');

// configure app to use bodyParser()
// this will let us get the data from a POST
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.use((req, _res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

routes.use('/status', status);
routes.use('/audio', audio);

module.exports = routes;

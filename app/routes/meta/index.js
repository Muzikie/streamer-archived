// Route
// eslint-disable-next-line new-cap
const status = require('express').Router();

// @todo Implement Blockchain status method
// methods
const api = require('./api');
// const blockchain = require('./blockchain');

// validators
const Api = require('../../validation/status/api');
// const Blockchain = require.main.require('./app/validation/status/blockchain');

/**
 * @api {get} /status/api Get API status
 * @apiName getApiStatus
 * @apiGroup Status
 */
status.get('/api', Api, api);

/**
 * @api {get} /status/blockchain Get Muzikie blockchain status
 * @apiName getBlockchainStatus
 * @apiGroup Status
 */
// status.get('/blockchain', Blockchain, blockchain);

module.exports = status;

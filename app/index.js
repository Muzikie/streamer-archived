const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const ERRORS = require('./errors');
const WHITE_LIST = require('../config/whiteList');

const app = express();
require('../db');

// white listed only our clients
app.use(cors({
  origin: WHITE_LIST[0],
  optionsSuccessStatus: 200,
}));

app.use('/api/v1', routes);

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: ERRORS.NOT_FOUND,
  });
});

module.exports = app;


const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const routes = require('./routes');
const ERRORS = require('./errors');
const WHITE_LIST = require('../config/whiteList');
const { API_VERSION, MAX_FILE_SIZE } = require('../config/api');

const app = express();
require('../db');

// white listed only our clients
app.use(cors({
  origin: WHITE_LIST[0],
  optionsSuccessStatus: 200,
}));

// Middleware for parsing uploaded files
app.use(fileUpload({
  createParentPath: true,
  limits: { 
    fileSize: MAX_FILE_SIZE,
  },
}));

// Register API routes
app.use(`/api/${API_VERSION}`, routes);

// Handle 404
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: ERRORS.NOT_FOUND,
  });
});

module.exports = app;


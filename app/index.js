const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const ERRORS = require("./errors");
const WHITE_LIST = require("./whiteList");
const app = express();
require("../db");

// white listed only our clients
app.use(
  cors({
    origin: WHITE_LIST,
    optionsSuccessStatus: 200,
  })
);

app.use("/api/v1", routes);

app.use((err, _req, res) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || ERRORS.UNHANDLED_ERROR,
    errors: err.error || [],
  });
});

app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: ERRORS.RESOURCE_SUBSCRIPTION,
  });
});

module.exports = app;

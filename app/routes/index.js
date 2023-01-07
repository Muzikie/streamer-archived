// eslint-disable-next-line new-cap
const express = require("express");
const bodyParser = require("body-parser");

// Require routes
const status = require("./status");
const audio = require("./audio");

const app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, _res, next) => {
  // eslint-disable-next-line no-console
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next(); // make sure we go to the next routes and don't stop here
});

app.use("/status", status);
app.use("/audios", audio);

module.exports = app;

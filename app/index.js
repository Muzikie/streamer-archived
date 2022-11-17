const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// white listed only our clients
app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
}));

app.use('/', routes);

app.use((err, _req, res) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occurred.',
    errors: err.error || [],
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found!',
  });
});

module.exports = app;

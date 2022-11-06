const express = require('express');
import apiConfig from './config/api';
const routes = require('./app/routes');

const app = express();

// set API port
const port = process.env.PORT || apiConfig.port;

// white listed only our clients
app.use(cors({
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
}));

app.use('/', routes);

app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || 'An error occurred.',
    errors: err.error || [],
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found.',
  });
});

// Start the server

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

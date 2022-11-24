const app = require('./app');
const apiConfig = require('./config/api');

// set API port
const port = process.env.PORT || apiConfig.port;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`);
});

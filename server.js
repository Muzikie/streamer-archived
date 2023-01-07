const apiConfig = require('./config/api');

const app = require('./app');

// set API port
const port = apiConfig.port;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${port}`);
});

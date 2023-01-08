const { PORT } = require('./config/api');

const app = require('./app');

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});

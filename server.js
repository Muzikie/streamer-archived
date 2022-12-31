/* eslint-disable prettier/prettier */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');



const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// const DB = process.env.DATABASE_LOCAL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT * 1;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}`);
});

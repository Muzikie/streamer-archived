const express = require('express');

//require routers
const songRouter = require('./app/routes/audio/songRoutes');

const app = express();

// 3)ROUTES (Mounted)
app.use('/api/v1/songs', songRouter);

// 4)START SERVER
module.exports = app;

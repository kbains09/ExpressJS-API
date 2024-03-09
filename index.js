require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const videosRouter = require('./routes/videos');

app.use('/videos', videosRouter);
// app.use('/routes', videosRouter); sends the request to the videosRouter file, see if 'routes' can be removed to just '/'
// directs express to the router with routes

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});

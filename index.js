require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, BASE_URL  } = process.env;
const videosRouter = require('./routes/videos');
const cors = require('cors');

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use((req, res, next)=>{
  console.log('I am a middleware test');
  next();
});
// middleware test, next() needed in middleware to move on to next function

app.use('/videos', videosRouter);
// app.use('/routes', videosRouter); sends the request to the videosRouter file, see if 'routes' can be removed to just '/'
// directs express to the router with routes

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
// tells express where to listen for server (.env holds more port info)

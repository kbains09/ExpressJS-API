const express = require('express');
const app = express();
require('dotenv').config();
const { PORT} = process.env;
const videosRouter = require('./routes/videos');
const cors = require('cors');
const {CORS_ORIGIN} = process.env;

console.log(process.env); 
// testing enviroment variables
console.log('I am a test message');

app.use((req, res, next)=>{
  console.log('I am a middleware test');
  next();
});
// middleware test, next() needed in middleware to move on to next function

// Middleware
app.use((cors()));
app.use(express.json());
app.use(express.static('public'));
app.use(cors());


app.use('/videos', videosRouter);
// app.use('/routes', videosRouter); sends the request to the videosRouter file, see if 'routes' can be removed to just '/'
// directs express to the router with routes

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`); 
});
// tells express where to listen for server (.env holds more port info)

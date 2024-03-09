const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  // const videoDataJSON = fs.readFileSync('./data/videos.json');
  // const videoData = JSON.parse(videoDataJSON);
  // console.log(videoData); 
  // res.status(201).send(videoData);
  res.send('get request to the homepage');
});
// ^ test routes before fetching data from files 

router.get('/', (req, res) => {
  res.send({ message: 'Get request to /videos' });
});

router.get('/:id', (req, res) => {
  // const videoId = req.params;
  const { id } = req.params;
  console.log(videoId);
  res.send({ message: 'Get request to specific video' });
});

router.post('/', (req, res) => {
  const newVideo = {
    id: uuidv4(),
    video: req.body.image,
  }
  videos.push(newVideo);
  req.json(newVideo); 
  res.send({ message: 'post request being sent', body: req.body });
  console.log(req.body);
  console.error(error);
}); 

module.exports = router;
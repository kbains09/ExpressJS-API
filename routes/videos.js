const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  // const videoDataJSON = fs.readFileSync('./data/videos.json');
  // const videoData = JSON.parse(videoDataJSON);
  // console.log(videoData); 
  // res.status(201).send(videoData);
  res.send('get request to the /videos route');
});
// ^ test routes before fetching data from files 



router.get('/:id', (req, res) => {
  const { id } = req.params;
  const videoData = videoData();
  const video = videoData.find(v => v.id === id);
  if (!video) {
      return res.status(404).send({ message: 'Video not found' });
  }
  res.status(200).send(video);
});

router.post('/', (req, res) => {
  console.log('post request being sent');
  try {
      const videos = readVideoData();
      const newVideo = { id: uuidv4(), ...req.body };
      videos.push(newVideo);
      fs.writeFileSync(videoDataPath, JSON.stringify(videos, null, 2));
      res.status(201).json(newVideo);
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error adding video' });
  }
  console.log('post request sent');
});

module.exports = router;
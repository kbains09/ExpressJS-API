const express = require('express');
const router = express.Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/', (req, res) => {
  try{
    const videoDataJSON = fs.readFileSync('./data/videos.json');
    const videoData = JSON.parse(videoDataJSON);
    console.log(videoDataJSON); 
    console.log(videoData); 
    res.status(201).send(videoData);
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving videos' });
  }
});

router.get('/:id', (req, res) => {
  try {
    const videoDataJSON = fs.readFileSync('./data/videos.json');
    const videoData = JSON.parse(videoDataJSON);
    const video = videoData.find((video) => video.id === req.params.id);
    if (video) {
      res.status(200).send(video);
    } else {
      res.status(404).send({ message: 'Video not found' });
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error retrieving video' });
  }
});

router.post('/', (req, res) => {
  try { 
    const videoDataJSON = fs.readFileSync('./data/videos.json');
    const videoData = JSON.parse(videoDataJSON);
    const newVideo = { id: uuidv4(), ...req.body };
    videoData.push(newVideo);
    fs.writeFileSync('./data/videos.json', JSON.stringify(videoData, null, 2));
    res.status(201).send(newVideo);
  }
  catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error adding video' });
  }
}
);

module.exports = router;
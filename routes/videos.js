
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('get request to the homepage');
});

router.get('/videos', (req, res) => {
  res.send({ message: 'Get request to /videos' });
});

router.get('/videos/:id', (req, res) => {
  res.send({ message: 'Get request to specific video' });
});

router.post('/videos', (req, res) => {
  res.send({ message: 'post request being sent', body: req.body });
  console.log(req.body);
  console.error(error);
}); 

module.exports = router;
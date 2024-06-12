const express = require('express');
const { getSequentialAudio } = require('./audioUp.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/sequential-audio', getSequentialAudio);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
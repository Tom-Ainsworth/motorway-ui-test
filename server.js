'use strict';

const app = require('express')();
const images = require('./src/images.json');

// Remove unnecessary variable
// const randomInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;

  // Remove setTimeout so that content loads without the delay.
  // setTimeout(() => {
  return res.status(200).json(i);
  // }, randomInterval(500, 1500));
});

app.listen(5000, () => {
  process.stdout.write('Server is available on http://localhost:5000/\n');
});

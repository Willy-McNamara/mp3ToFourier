// server to display p5.js visualization

const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const db = require('../db');
const cors = require('cors');
const app = express();
const init = require('./sketch.js')

// app.use(express.json());
app.use(express.static(path.join(__dirname)));
//app.use(express.static('./index.html'));


// var filename = ''
// app.get('/:fileName', (req, res) => {
//   console.log('app.get/:fileName trigger. here is req.params :', req.params)
//   filename = req.params.fileName
//   res.send('Hello World')
// })

const PORT = process.env.PORT || 3033;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

// module.exports = filename;

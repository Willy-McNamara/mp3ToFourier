const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const db = require('../db');
const cors = require('cors');
// const bodyparser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express();
// middleware to
app.use(cors());
app.use(morgan('dev'));
// app.use(express.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));


//const dontUseMe = () => throw new Error('implement controllers');

app.post('/upload', upload.single('mp3'), (req, res) => {
  //
  //console.log('logging req', req)
  console.log('logging req.body', req.body)
  console.log('testing .file', req.file)
  res.send('successful send!')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

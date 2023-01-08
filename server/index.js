const path = require('path');
const express = require('express');
const morgan = require('morgan');
// const db = require('../db');
const cors = require('cors');
// const bodyparser = require('body-parser');
const multer  = require('multer')
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
  destination: function (req, file, cb) {
    cb(null, './controller/p5/uploads')
  },
})
const upload = multer({ storage })

const app = express();


app.use(cors());
app.use(morgan('dev'));
// app.use(express.json());
// app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/public')));



//const dontUseMe = () => throw new Error('implement controllers');

app.post('/upload', upload.single('mp3'), (req, res) => {
  console.log('here is file:', req.file)
  res.send('successful send!')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

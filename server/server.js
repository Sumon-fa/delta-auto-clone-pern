const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const client = require('./db/db');
const cors=require("cors")
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const HttpError = require('./middlewares/http-error');


client.connect();
app.use(express.json());
app.use('/uploads/images', express.static(path.join('uploads', 'images')));

app.use(bodyParser.urlencoded({ extended: true }));

// Import all routes
const car = require('./routes/car');
const auth = require('./routes/auth');
app.use(
  cors()
)
app.use('/v1', car);
app.use('/v1', auth);
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

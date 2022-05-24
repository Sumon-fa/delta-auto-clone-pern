const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());

// Import all routes
const car = require('./routes/car');
const HttpError = require('./middlewares/http-error');

app.use('/api/v1', car);
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occured' });
});

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

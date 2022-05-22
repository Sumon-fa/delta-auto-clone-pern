const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Import all routes
const car = require('./routes/car');

app.use('/api/v1', car);

const port = process.env.port;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

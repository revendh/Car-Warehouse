const express = require('express');
const dotenv = require('dotenv');

const DB = require('./db');
const carsRouter = require('./routes/carsRouter');

const app = express();
const PORT = 8080 || process.env.PORT;

dotenv.config({ path: `${__dirname}/.env` });

app.use('v1/api/cars', carsRouter);

DB.connect();

app.listen(PORT, () => {
  console.log(`Listing to ${PORT}`);
});

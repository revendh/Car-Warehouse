const express = require('express');
const dotenv = require('dotenv');

const connection = require('./db');
const carsRouter = require('./routes/carsRouter');

const app = express();
const PORT = 8080 || process.env.PORT;

dotenv.config({ path: `${__dirname}/.env` });

app.use('/api/v1/cars', carsRouter);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

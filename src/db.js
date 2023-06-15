const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

module.exports = connection;

const mysql = require('mysql2');
const config = require('./config/config');

const connection = mysql.createConnection({
  host: config.DB.DB_HOST,
  database: config.DB.DB,
  user: config.DB.DB_USERNAME,
  password: config.DB.DB_PASSWORD,
});

module.exports = connection;

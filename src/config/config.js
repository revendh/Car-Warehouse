const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

module.exports = {
  database: {
    host: process.env.DB_HOST,
    name: process.env.DB,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
};

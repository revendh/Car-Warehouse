const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/../.env` });

module.exports = {
  database: {
    host: 'localhost',
    name: 'cars_warehouse',
    username: 'cars_warehouse',
    password: '123456789',
  },
};

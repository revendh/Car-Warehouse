const db = require('../db');

exports.getCars = (req, res) => {
  db.query('SELECT * FROM cars', (err, results, fields) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        status: 'error',
        message: 'An error occurred while retrieving cars.',
      });
    }

    res.status(200).json({
      status: 'success',
      data: results,
    });
  });
};

exports.getCar = (req, res) => {};
exports.createCar = (req, res) => {};
exports.updateCar = (req, res) => {};
exports.deleteCar = (req, res) => {};

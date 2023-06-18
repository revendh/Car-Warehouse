const asyncHandler = require('express-async-handler');
const Car = require('../models/carModel');

const isNotCar = (car, res) => {
  if (!car) {
    return res.status(404).json({
      status: 'error',
      msg: 'Can not find car with this id',
    });
  }
};

exports.getCars = async (req, res, next) => {
  const cars = await Car.findAll();

  res.status(200).json({
    status: 'success',
    length: cars.length,
    cars,
  });
};

exports.getCar = asyncHandler(async (req, res, next) => {
  const car = await Car.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (isNotCar(car, res)) return;

  res.status(200).json({
    status: 'success',
    car,
  });
});

exports.createCar = asyncHandler(async (req, res, next) => {
  const { model, color, quantity } = req.body;

  const newCar = await Car.create({ model, color, quantity });

  res.status(201).json({
    status: 'success',
    newCar,
  });
});

exports.updateCar = asyncHandler(async (req, res, next) => {
  const [rowsUpdated] = await Car.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (isNotCar(rowsUpdated, res)) return;

  res.status(200).json({
    status: 'success',
  });
});

exports.deleteCar = asyncHandler(async (req, res, next) => {
  const car = await Car.destroy({
    where: {
      id: req.params.id,
    },
  });

  if (isNotCar(car, res)) return;

  res.status(200).json({
    status: 'success',
  });
});

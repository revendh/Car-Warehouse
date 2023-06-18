const Joi = require('joi');
const { body } = require('express-validator');

exports.carValidationSchema = Joi.object({
  model: Joi.string().required(),
  color: Joi.string().required(),
  quantity: Joi.number().required(),
});

exports.createCarValdiationInput = [
  body('model').trim().notEmpty().withMessage('Car model is required'),
  body('color').trim().notEmpty().withMessage('Car color is required'),
  body('quantity')
    .notEmpty()
    .withMessage('Car quantity is required')
    .isInt({ min: 1 })
    .withMessage('Quantity must be a positive integer'),
];

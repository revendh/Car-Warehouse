const router = require('express').Router();
const {
  createCar,
  deleteCar,
  getCar,
  getCars,
  updateCar,
} = require('../controllers/carsControllers');

router.route('/').get(getCars).post(createCar);
router.route('/:id').get(getCar).patch(updateCar).delete(deleteCar);

module.exports = router;

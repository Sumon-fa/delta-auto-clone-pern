const express = require('express');
const router = express.Router();
const { newCar, getAllCars,getSingleCar,updateCar,deleteCar } = require('../controllers/carController');

router.route('/admin/newcar').post(newCar);
router.route('/admin/cars').get(getAllCars);
router.route('/cars').get(getAllCars);
router.route('/admin/car/:id').get(getSingleCar).put(updateCar).delete(deleteCar);
router.route('/car/:id').get(getSingleCar)

module.exports = router;

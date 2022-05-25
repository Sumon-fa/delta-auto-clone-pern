const express = require('express');
const router = express.Router();
const { newCar, getAllCars } = require('../controllers/carController');

router.route('/admin/newcar').post(newCar);
router.route('/cars').get(getAllCars);

module.exports = router;

const express = require('express');
const router = express.Router();
const { newCar } = require('../controllers/carController');

router.route('/admin/newcar').post(newCar);

module.exports = router;

const express = require('express');
const router = express.Router();

const {registerUser,login,getUsers }=require("../controllers/authController");
const fileUpload = require('../middlewares/file-upload');

router.route('/').get(getUsers);
router.route('/register').post(fileUpload.single('image'),registerUser);
router.route('/login').post(login);


module.exports = router;
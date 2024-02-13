const express = require ('express')
const router = express.Router();
const authController = require('../controller/authController');
const checkLogin = require('../utils/checkLogin').checkLogin

router.post('/login',authController.login);

module.exports = router;
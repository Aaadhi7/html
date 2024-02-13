const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const checkLogin = require('../utils/checkLogin').checkLogin;

router.post('/users',userController.createUser);
router.get('/users',userController.getUserData);
router.post('/users',userController.updateUser);
router.get('/users',userController.deleteUser);


module.exports = router;
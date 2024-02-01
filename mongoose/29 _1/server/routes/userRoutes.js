const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/submit',userController.createUser);
router.get('/get',userController.getUserData);
router.put('/put',userController.updateUser);
router.delete('/delete',userController.deleteUser)

module.exports = router;
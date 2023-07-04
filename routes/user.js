
const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.post('/adduser', userController.createUser);
router.post('/loginuser',userController.getUser)
module.exports = router;

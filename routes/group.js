const express=require('express')
const router=express.Router()
const groupController = require('../controller/group');

const { authenticate } = require('../middleware/auth');

router.post('/creategroup', authenticate, groupController.createGroup);
module.exports=router
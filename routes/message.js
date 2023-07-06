const express=require('express')
const router=express.Router()
const messageController = require('../controller/message');
const { authenticate } = require('../middleware/auth');
router.post('/addmessage',authenticate,messageController.createMessage)
router.get('/getmessage',authenticate,messageController.getAllMessage)
module.exports=router
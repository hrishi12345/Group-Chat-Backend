const express=require('express')
const router=express.Router()
const messageController = require('../controller/message');
router.post('/addmessage',messageController.createMessage)
module.exports=router
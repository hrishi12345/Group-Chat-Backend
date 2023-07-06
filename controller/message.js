const MessageRepository = require('../repository/message');
const messageRepo = new MessageRepository();

async function createMessage(req, res) {
  try {
    const { message } = req.body;
    const userId = req.user.id; // Assuming you have the authenticated user's information with 'id' field
    
    console.log(req.body)
    if(message.length===0 || userId.length===0){
        // console.log(message,userId)
    }else{
        var response = await messageRepo.addMessage({ message, userId });
    }
    

    if (response) {
      return res.status(201).json({ message: 'Message created successfully', data: response });
    } else {
      return res.status(500).json({ error: 'Failed to create message' });
    }
  } catch (error) {
    console.log('Error while creating message:', error);
    return res.status(500).json({ error: 'Failed to create message' });
  }
}
const getAllMessage=async (req,res)=>{
    try{
        const response=await MessageRepository.getMessages()
        if(response){
        return res.status(200).json({message:'Data fetched successfully',data:response})
        }else{
            return res.status(400).json({message:'Error while fetching the data'})
        }
    }catch(error){
        console.log(error)
    }
}
module.exports = {
  createMessage,
  getAllMessage
};

const MessageRepository = require('../repository/message');
const messageRepo = new MessageRepository();

async function createMessage(req, res) {
  try {
    const { message } = req.body;
    const userId = req.user.id; // Assuming you have the authenticated user's information with 'id' field

    const response = await messageRepo.addMessage({ message, userId });

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

module.exports = {
  createMessage
};

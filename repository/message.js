const Message = require('../models/messages');

class MessageRepository {
  static async addMessage({ message, userId }) {
    try {
      const createdMessage = await Message.create({ userId: userId, content: message });
      return createdMessage;
    } catch (error) {
      console.log('Error while adding data to the database:', error);
      throw error;
    }
  }

  static async getMessages() {
    try {
      const allMessages = await Message.findAll(); // Retrieve all messages
      return allMessages;
    } catch (error) {
      console.log('Error while retrieving messages:', error);
      throw error;
    }
  }
}

module.exports = MessageRepository;

const Message = require('../models/messages');
const User = require('../models/user');

class MessageRepository {
  async addMessage({ message, userId }) {
    try {
      const createdMessage = await Message.create({ content: message });
      
      // Associate the message with a user
      if (userId) {
        const user = await User.findByPk(userId);
        if (user) {
          await createdMessage.setUser(user);
        }
      }

      return createdMessage;
    } catch (error) {
      console.log('Error while adding data to the database:', error);
      throw error;
    }
  }
}

module.exports = MessageRepository;

const GroupMessage = require('../models/groupmessage');

class GroupMessageRepo {
  static async createGroupMessage({ content, groupId, userId }) {
    try {
      const response = await GroupMessage.create({ content, groupId, userId });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getGroupMessage({ id }) {
    try {
      const response = await GroupMessage.findByPk(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = GroupMessageRepo;

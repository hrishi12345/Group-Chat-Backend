const Group = require('../models/groups');
const GroupMembership = require('../models/groupmembership');
const GroupMessage = require('../models/groupmessage');

class GroupRepo {
  async createGroupRecord({ name, description }) {
    try {
      const group = await Group.create({ name, description });
      return group;
    } catch (error) {
      console.log(error);
    }
  }

  static async getGroupRecord({ id }) {
    try {
      const group = await Group.findByPk(id);
      return group;
    } catch (error) {
      console.log(error);
    }
  }

  static async joinGroup({ groupId, memberId, role, joinDate }) {
    try {
      const membership = await GroupMembership.create({
        groupId,
        memberId,
        role,
        joinDate,
      });
      return membership;
    } catch (error) {
      console.log(error);
    }
  }

  static async createGroupMessage({ groupId, content }) {
    try {
      const message = await GroupMessage.create({ groupId, content });
      return message;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = GroupRepo;

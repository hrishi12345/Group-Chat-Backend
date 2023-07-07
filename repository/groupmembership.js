const GroupMembership = require('../models/groupmembership');

class GroupMembershipRepo {
  static async createGroupMembership({ memberId, groupId, role, joinDate }) {
    try {
      const response = await GroupMembership.create({
        memberId: memberId,
        groupId: groupId,
        role: role,
        joinDate: joinDate
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getGroupMembership({ memberId, groupId }) {
    try {
      const response = await GroupMembership.findOne({
        where: { memberId: memberId, groupId: groupId }
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // Add more methods as needed (e.g., updateGroupMembership, deleteGroupMembership)

}

module.exports = GroupMembershipRepo;

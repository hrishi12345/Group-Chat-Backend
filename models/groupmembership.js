const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = require('./user');
const Group = require('./groups');

const GroupMembership = sequelize.define('group_membership', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  memberId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id'
    }
  },
  role: Sequelize.STRING,
  joinDate: Sequelize.DATE
});

module.exports = GroupMembership;

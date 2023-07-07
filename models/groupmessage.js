const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Group = require('./groups');
const User = require('./user');

const GroupMessage = sequelize.define('groupmessage', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  groupId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Group,
      key: 'id'
    }
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  // other fields of the group message model
});

GroupMessage.belongsTo(Group, { foreignKey: 'groupId' });
GroupMessage.belongsTo(User, { foreignKey: 'userId' });

module.exports = GroupMessage;

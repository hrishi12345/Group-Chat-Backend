const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const Message = require('./messages');
const GroupMembership = require('./groupmembership');
const Group = require('./groups');

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: Sequelize.STRING,
  phoneNumber: Sequelize.STRING
});



module.exports = User;

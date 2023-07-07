const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User=require('./user')
const Group = sequelize.define('groups', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  privacySettings: {
    type: Sequelize.STRING,
    defaultValue: '0'
  }
});



module.exports = Group;

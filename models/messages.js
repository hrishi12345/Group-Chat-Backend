const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  content: Sequelize.STRING,
  // other fields of the message model
});

module.exports = Message;

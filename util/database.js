const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const sequelize = new Sequelize('group_chat', 'root', 'Hrishi@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;

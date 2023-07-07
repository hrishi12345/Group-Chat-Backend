const express = require('express');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const cors = require('cors');
const messageRoutes=require('./routes/message')
const groupRoutes=require('./routes/group')
const app = express();

const Group=require('./models/groups')

const GroupMembership = require('./models/groupmembership');
const User=require('./models/user')
const Message=require('./models/messages')
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/user', userRoutes);
app.use('/message',messageRoutes)
app.use('/group',groupRoutes)


User.hasMany(Message, { foreignKey: 'userId' });
User.belongsToMany(Group, { through: GroupMembership, foreignKey: 'memberId' });
Group.belongsToMany(User, { through: GroupMembership, foreignKey: 'groupId' });
// Synchronize Sequelize models with the database and start the server
sequelize
  .sync()
  .then(() => {
    app.listen(3001);
    console.log('Server started on port 3000');
  })
  .catch((error) => {
    console.error('Error syncing tables:', error);
  });

const express = require('express');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const cors = require('cors');

const app = express();
app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/user', userRoutes);

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

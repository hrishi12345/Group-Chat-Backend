const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = async (req, res, next) => {
  try {
    
    const token = req.header('Authorization');
    // console.log(token)
    const decodedToken = jwt.verify(token, 'secretkey');
    // console.log(decodedToken)
    const user = await User.findByPk(decodedToken.userId);
    console.log(user)
    if (!user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
};

module.exports = {
  authenticate,
};

const UserRepository = require('../repository/user');
const userRepo = new UserRepository();
const bcrypt = require('bcrypt');

function isString(string) {
  return typeof string === 'string' && string.trim().length === 0;
}

async function encryptPassword(password) {
  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
  } catch (error) {
    console.log(error);
    throw new Error('Error while hashing the password');
  }
}

const createUser = async (req, res) => {
  try {
    const { username, email, password, number } = req.body;
    if (isString(username) || isString(password) || isString(email)) {
      return res.status(400).json({ error: 'Bad parameters' });
    }
    const pass = await encryptPassword(password);
    try {
      await userRepo.createuser({
        username,
        email,
        password: pass,
        phoneNumber: number,
      });
      res.status(200).json({ message: 'User created successfully' });
    } catch (error) {
      console.log(error);
      console.log('Error while sending data to repo');
      throw error;
    }
  } catch (error) {
    console.log('Error while getting the data');
    throw error;
  }
};

module.exports = {
  createUser,
};

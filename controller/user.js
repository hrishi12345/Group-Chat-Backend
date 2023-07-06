const UserRepository = require('../repository/user');
const userRepo = new UserRepository();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

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
async function decryptPassword(password, user) {
    try {
      const result = await bcrypt.compare(password, user);
      console.log(user)
      return result;
    } catch (error) {
      console.error(error);
      throw new Error('Something went wrong');
    }
  }

  const generateAccessToken = (id, name) => {
    return jwt.sign({ userId : id, name: name} ,'secretkey');
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
  }}
  const getUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (isString(password) || isString(email)) {
        return res.status(400).json({ error: 'Bad parameters' });
      }
      const users = await userRepo.getuser({ email });
      console.log(users.dataValues)
      if (users.dataValues) {
        console.log(users.dataValues.password)
        const isPasswordCorrect = await decryptPassword(password, users.dataValues.password);
        console.log(isPasswordCorrect)
        if (isPasswordCorrect) {
            return res.status(201).json({success: true, message: "User logged in successfully", token: generateAccessToken(users.dataValues.id, users.dataValues.username)})
        } else {
          res.status(401).json({ message: 'Password incorrect' });
        }
      } else {
        res.status(403).json({ message: 'User Not Found' });
      }
    } catch (error) {
      console.log('Error while sending data', error);
      throw error;
    }
  };
  
  


module.exports = {
  createUser,
  getUser,
  generateAccessToken
};

const User = require('../models/User');
const bcrypt = require('bcrypt');


async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function getUserById(req, res) {
  try {
    const  id  = req.query.id;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function createUser(req, res) {
    try {
      const { firstName, email, password, lastName, role } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        role,
      });
      // Create a new user
  
  
      return res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  

  async function updateUser(req, res) {
    try {
      const id  = req.query.id;
      const { firstName, email, password, lastName, role } = req.body;
  
      // Check if the user exists
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user data
      user.firstName = firstName;
      user.email = email;
      await user.save();
  
      return res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
  
  async function deleteUser(req, res) {
    try {
        const id  = req.query.id;
  
      // Check if the user exists
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Delete the user
      await user.destroy();
  
      return res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}
async function adminPage(req, res) {
      return res.status(200).json({ message: 'This is Admin Page' });

  }
  
  async function homePage(req, res) {
    return res.status(200).json({ message: 'This is Home Page' });

}

async function dashboard(req, res) {
    return res.status(200).json({ message: 'This is dashboard' });

}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  homePage,
  dashboard,
  adminPage
};

const Users = require('../model/users_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.createUsers = async (req, res) => {
  const { mobile } = req.body;

  if (!mobile) {
    return res.status(200).json({
      status: 400,
      data: {},
      message: "Mobile number is required",
      errorCode: 1
    });
  }
  try {
    const existingUser = await Users.findOne({ mobile });
    if (existingUser) {
      return res.status(200).json(
        {
          status: 200,
          exists: true,
          message: 'Mobile number already exists',
          errorCode: 1
        });
    } else {
      const newUser = new Users(req.body);
      const savedUser = await newUser.save();
      return res.status(201).json(
        {
          exists: false,
          status: 200,
          message: 'User saved successfully',
          data: savedUser,
          errorCode: 0
        }
      );
    }
  } catch (error) {
    return res.status(500).json({ message: 'Server error', error });
  }
};


exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: 200,
      data: users,
      message: "user fatched successfull",
      errorCode: 0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.getUserById = async (req, res) => {
  console.log('reeeee', req.params.id);
  try {
    const item = await Users.findById(req.params.id);
    if (!item) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "user fatch successfully",
        data: item,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const updatedItem = await Users.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "updated successfully",
        data: updatedItem,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const deleteItem = await Users.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: deleteItem,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "deleted successfully",
        data: deleteItem,
        errorCode: 0
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "server error",
      data: error,
      errorCode: 1
    });
  }
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await Users.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};
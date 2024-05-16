const Users = require('../model/users_model');

exports.createUsers = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).json({
      status: 200,
      data: users,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json({
      status: 200,
      data: users,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

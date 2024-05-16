const Users = require('../model/users_model');

exports.createUsers = async (req, res) => {
  try {
    const users = await Users.create(req.body);
    res.status(200).json({
      status: 200,
      data: users,
      message: "user created successfull",
      errorCode: 0
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
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
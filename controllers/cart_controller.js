const Cart = require('../model/cart_model');

exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      status: 200,
      data: cart,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCartItem = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.status(200).json({
      status: 200,
      data: cart,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getCartById = async (req, res) => {
  try {
    const item = await Cart.findById(req.params.id);
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
        message: "item fatch successfully",
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

exports.updateCart= async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "item not found",
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

exports.deleteCart = async (req, res) => {
  try {
    const deleteItem = await Cart.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "item not found",
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
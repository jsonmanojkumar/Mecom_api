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

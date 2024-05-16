const Product = require('../model/products_model');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      status: 200,
      data: product,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({
      status: 200,
      data: product,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

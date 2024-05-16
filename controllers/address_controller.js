const Address = require('../model/address_model');

exports.createAddress = async (req, res) => {
  try {
    const address = await Address.create(req.body);
    res.status(200).json({
      status: 200,
      data: address,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAddress = async (req, res) => {
  try {
    const address = await Address.find();
    res.status(200).json({
      status: 200,
      data: address,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

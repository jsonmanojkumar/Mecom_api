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



exports.getAddressById = async (req, res) => {
  console.log('reeeee', req.params.id);
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
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
        data: address,
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

exports.updateAddress = async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAddress) {
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
        data: updatedAddress,
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

exports.deleteAddress = async (req, res) => {
  try {
    const deleteAddress = await Address.findByIdAndDelete(req.params.id);
    if (!deleteAddress) {
      return res.status(404).json(
        {
          status: 404,
          message: "user not found",
          data: deleteAddress,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "deleted successfully",
        data: deleteAddress,
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
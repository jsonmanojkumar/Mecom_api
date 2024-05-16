const SubCategories = require('../model/subCategories_model');

exports.createSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategories.create(req.body);
    res.status(200).json({
      status: 200,
      data: subCategories,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSubCategories = async (req, res) => {
  try {
    const subCategories = await SubCategories.find();
    res.status(200).json({
      status: 200,
      data: subCategories,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

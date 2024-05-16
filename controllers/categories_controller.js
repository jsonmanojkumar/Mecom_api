const Categories = require('../model/categories_model');

exports.createCategories = async (req, res) => {
  try {
    const categories = await Categories.create(req.body);
    res.status(200).json({
      status: 200,
      data: categories,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.status(200).json({
      status: 200,
      data: categories,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

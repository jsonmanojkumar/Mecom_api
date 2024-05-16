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



exports.getSubCategoriesById = async (req, res) => {
  console.log('reeeee', req.params.id);
  try {
    const item = await SubCategories.findById(req.params.id);
    if (!item) {
      return res.status(404).json(
        {
          status: 404,
          message: "SubCategories not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "SubCategories fatch successfully",
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

exports.updateSubCategories = async (req, res) => {
  try {
    const updatedItem = await SubCategories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "SubCategories not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "SubCategories updated successfully",
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

exports.deleteSubCategories = async (req, res) => {
  try {
    const deleteItem = await SubCategories.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "SubCategories not found",
          data: deleteItem,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "SubCategories deleted successfully",
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
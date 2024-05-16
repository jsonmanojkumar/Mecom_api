const SearchHistory = require('../model/searchHistory_model');

exports.createSearchHistory = async (req, res) => {
  try {
    const searchHistory = await SearchHistory.create(req.body);
    res.status(200).json({
      status: 200,
      data: searchHistory,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSearchHistory = async (req, res) => {
  try {
    const searchHistory = await SearchHistory.find();
    res.status(200).json({
      status: 200,
      data: searchHistory,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateSearchHistory = async (req, res) => {
  try {
    const updatedItem = await SearchHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "SearchHistory not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "SearchHistory updated successfully",
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

exports.deleteSearchHistory = async (req, res) => {
  try {
    const deleteItem = await SearchHistory.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "SearchHistory not found",
          data: deleteItem,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "SearchHistory deleted successfully",
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
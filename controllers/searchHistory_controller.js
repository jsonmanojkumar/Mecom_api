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

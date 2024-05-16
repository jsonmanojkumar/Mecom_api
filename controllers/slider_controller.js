const Slider = require('../model/slider_model');

exports.createSlider = async (req, res) => {
  try {
    const slider = await Slider.create(req.body);
    res.status(200).json({
      status: 200,
      data: slider,
      message:"success",
      errorCode:0
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getSlider = async (req, res) => {
  try {
    const slider = await Slider.find();
    res.status(200).json({
      status: 200,
      data: slider,
      message:"success",
      errorCode:0
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getSliderById = async (req, res) => {
  console.log('reeeee', req.params.id);
  try {
    const item = await Slider.findById(req.params.id);
    if (!item) {
      return res.status(404).json(
        {
          status: 404,
          message: "Slider not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "Slider fatch successfully",
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

exports.updateSlider = async (req, res) => {
  try {
    const updatedItem = await Slider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "Slider not found",
          data: [],
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "Slider updated successfully",
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

exports.deleteSlider = async (req, res) => {
  try {
    const deleteItem = await Slider.findByIdAndDelete(req.params.id);
    if (!deleteItem) {
      return res.status(404).json(
        {
          status: 404,
          message: "Slider not found",
          data: deleteItem,
          errorCode: 1
        }
      );
    } else {
      res.status(200).json({
        status: 200,
        message: "Slider deleted successfully",
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
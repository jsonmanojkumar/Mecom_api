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

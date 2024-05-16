const express = require('express');
const router = express.Router();
const sliderController = require('../controllers/slider_controller');

router.post('/', sliderController.createSlider);
router.get('/', sliderController.getSlider);

module.exports = router;

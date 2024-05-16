const express = require('express');
const router = express.Router();
const sliderController = require('../controllers/slider_controller');

router.post('/createSlider', sliderController.createSlider);
router.get('/getSlider', sliderController.getSlider);
router.get('/getSliderById/:id', sliderController.getSliderById);
router.put('/updateSlider/:id', sliderController.updateSlider);
router.delete('/deleteSlider/:id', sliderController.deleteSlider);

module.exports = router;

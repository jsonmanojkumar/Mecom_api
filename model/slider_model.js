const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });




module.exports = mongoose.model('slider', sliderSchema);

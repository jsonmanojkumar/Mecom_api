const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });




module.exports = mongoose.model('media', mediaSchema);

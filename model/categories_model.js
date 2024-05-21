const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  name: {
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




module.exports = mongoose.model('categories', categoriesSchema);

const mongoose = require('mongoose');

const wishListSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });




module.exports = mongoose.model('wishLists', wishListSchema);

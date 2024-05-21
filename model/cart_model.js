const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productId: {
    type: String,
  },
  itemCount: {
    type: String,
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  totalAmount: {
    type: String,
  },
  inStock:{
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });




module.exports = mongoose.model('cart', cartSchema);

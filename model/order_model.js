const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  orderUserId: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  oldPrice: {
    type: String,
  },
  newPrice: {
    type: String,
  },
  discount: {
    type: String
  },
  inStock: {
    type: Boolean,
    default:true,
  },
  color: {
    type: String,
  },
  size: {
    type: String
  },
  description: {
    type: String
  },
  productRateing: {
    type: String
  },
  deliveryCharge: {
    type: String
  },
  replacement: {
    type: String
  },
  return: {
    type: String
  },
  paymentOptions: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });


module.exports = mongoose.model('products', productSchema);

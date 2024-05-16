const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true
  },
  subCategoryId: {
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
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


module.exports = mongoose.model('products', productSchema);

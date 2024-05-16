const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productId: {
    type: String,
    required: true
  },
  itemCount: {
    type: String,
    require: true
  },
  color: {
    type: String
  },
  size: {
    type: String
  },
  totalAmount: {
    type: String,
    require: true
  },
  inStock:{
    type: Boolean,
    default: true,
    require: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });




module.exports = mongoose.model('cart', cartSchema);

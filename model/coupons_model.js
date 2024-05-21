const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  couponName: {
    type: String,
  },
  couponDescription: {
    type: String,
  },
  couponNumber: {
    type: String,
  },
  expireDate: {
    type: Date,
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });


module.exports = mongoose.model('coupons', couponSchema);

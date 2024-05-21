const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  pin: {
    type: Number
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  mobile: {
    type: String
  },
  alternateNumber: {
    type: String
  },
  landmark: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('addresses', AddressSchema);

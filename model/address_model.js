const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  pin: {
    type: String
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
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('addresses', AddressSchema);

const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });




module.exports = mongoose.model('users', usersSchema);

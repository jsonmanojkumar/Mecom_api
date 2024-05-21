const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String
  },
  profileImage: {
    type: String
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });


module.exports = mongoose.model('users', usersSchema);

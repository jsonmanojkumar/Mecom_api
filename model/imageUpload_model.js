const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });




module.exports = mongoose.model('media', mediaSchema);

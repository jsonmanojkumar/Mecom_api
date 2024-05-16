const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });




module.exports = mongoose.model('categories', categoriesSchema);

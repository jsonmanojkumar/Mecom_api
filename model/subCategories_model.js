const mongoose = require('mongoose');

const subCategoriesSchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true
  },
  subCategoryName: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });




module.exports = mongoose.model('subCategories', subCategoriesSchema);

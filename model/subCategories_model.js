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
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });




module.exports = mongoose.model('subCategories', subCategoriesSchema);

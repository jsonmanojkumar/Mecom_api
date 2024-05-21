const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  searchString: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } });

module.exports = mongoose.model('searchHistorys', searchHistorySchema);

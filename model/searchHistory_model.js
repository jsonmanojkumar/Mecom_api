const mongoose = require('mongoose');

const searchHistorySchema = new mongoose.Schema({
  searchString: {
    type: String,
    required: true
  },
  is_deleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = mongoose.model('searchHistorys', searchHistorySchema);

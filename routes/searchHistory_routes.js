const express = require('express');
const router = express.Router();
const searchHistoryController = require('../controllers/searchHistory_controller');

router.post('/', searchHistoryController.createSearchHistory);
router.get('/', searchHistoryController.getSearchHistory);

module.exports = router;

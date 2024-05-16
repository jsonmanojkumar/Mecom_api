const express = require('express');
const router = express.Router();
const searchHistoryController = require('../controllers/searchHistory_controller');

router.post('/createSearchHistory', searchHistoryController.createSearchHistory);
router.get('/getSearchHistory', searchHistoryController.getSearchHistory);
router.put('/updateSearchHistory/:id', searchHistoryController.updateSearchHistory);
router.delete('/deleteSearchHistory/:id', searchHistoryController.deleteSearchHistory);

module.exports = router;

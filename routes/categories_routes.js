const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories_controller');

router.post('/', categoriesController.createCategories);
router.get('/', categoriesController.getCategories);

module.exports = router;

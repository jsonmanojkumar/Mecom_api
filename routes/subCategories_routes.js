const express = require('express');
const router = express.Router();
const subCategoriesController = require('../controllers/subCategories_controller');

router.post('/', subCategoriesController.createSubCategories);
router.get('/', subCategoriesController.getSubCategories);

module.exports = router;

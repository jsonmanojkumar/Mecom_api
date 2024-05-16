const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories_controller');

router.post('/createCategories', categoriesController.createCategories);
router.get('/getCategories', categoriesController.getCategories);
router.get('/getCategoriesById/:id', categoriesController.getCategoriesById);
router.put('/updateCategories/:id', categoriesController.updateCategories);
router.delete('/deleteCategories/:id', categoriesController.deleteCategories);

module.exports = router;

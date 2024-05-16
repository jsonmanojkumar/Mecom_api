const express = require('express');
const router = express.Router();
const subCategoriesController = require('../controllers/subCategories_controller');

router.post('/createSubCategories', subCategoriesController.createSubCategories);
router.get('/getSubCategories', subCategoriesController.getSubCategories);
router.get('/getSubCategoriesById/:id', subCategoriesController.getSubCategoriesById);
router.put('/updateSubCategories/:id', subCategoriesController.updateSubCategories);
router.delete('/deleteSubCategories/:id', subCategoriesController.deleteSubCategories);

module.exports = router;

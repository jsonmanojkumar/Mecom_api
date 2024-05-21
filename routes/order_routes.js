const express = require('express');
const router = express.Router();
const productController = require('../controllers/products_controller');

router.post('/createProduct', productController.createProduct);
router.get('/getProduct', productController.getProduct);
router.get('/getProductById/:id', productController.getProductById);
router.put('/updateProduct/:id', productController.updateProduct);
router.delete('/deleteProduct/:id', productController.deleteProduct);

module.exports = router;

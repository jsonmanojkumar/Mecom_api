const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart_controller');


router.post('/createCart', cartController.createCart);
router.get('/getCartItem', cartController.getCartItem);
router.get('/getCartById/:id', cartController.getCartById);
router.put('/updateCart/:id', cartController.updateCart);
router.delete('/deleteCart/:id', cartController.deleteCart);

module.exports = router;

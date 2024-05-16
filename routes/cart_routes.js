const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart_controller');

router.post('/', cartController.createCart);
router.get('/', cartController.getCartItem);

module.exports = router;

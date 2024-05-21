const express = require('express');
const router = express.Router();
const cartController = require('../controllers/wishList_controller');


router.post('/createWishList', cartController.createWishList);
router.get('/getWishList', cartController.getWishList);
router.get('/getWishListById/:id', cartController.getWishListById);
router.put('/updateWishList/:id', cartController.updateWishList);
router.delete('/deleteWishList/:id', cartController.deleteWishList);

module.exports = router;

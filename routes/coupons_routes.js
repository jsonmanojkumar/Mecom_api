const express = require('express');
const router = express.Router();
const usersController = require('../controllers/coupons_controller');

router.post('/createCoupons', usersController.createCoupons);
router.get('/getCoupons', usersController.getCoupons);
router.get('/getCouponsById/:id', usersController.getCouponsById);
router.put('/updateCoupons/:id', usersController.updateCoupons);
router.delete('/deleteCoupons/:id', usersController.deleteCoupons);

module.exports = router;

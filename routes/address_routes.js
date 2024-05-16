const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address_controller');

router.post('/createAddress', addressController.createAddress);
router.get('/getAddress', addressController.getAddress);
router.get('/getAddressById/:id', addressController.getAddressById);
router.put('/updateAddress/:id', addressController.updateAddress);
router.delete('/deleteAddress/:id', addressController.deleteAddress);

module.exports = router;

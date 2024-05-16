const express = require('express');
const router = express.Router();
const addressController = require('../controllers/address_controller');

router.post('/', addressController.createAddress);
router.get('/', addressController.getAddress);

module.exports = router;

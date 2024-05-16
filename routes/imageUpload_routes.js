const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageUpload_controller');
const uploadFilesMiddleware = require('../middlewares/imageUpload');

router.post('/', uploadFilesMiddleware,imageController.uploadFiles);
router.get('/', imageController.getUsers);

module.exports = router;

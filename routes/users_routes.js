const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.post('/createUser', usersController.createUsers);
router.get('/getUsers', usersController.getUsers);
router.get('/getUserById/:id', usersController.getUserById);
router.put('/updateUser/:id', usersController.updateUser);
router.delete('/deleteUser/:id', usersController.deleteUser);

router.delete('/login',usersController.verifyToken , usersController.loginUser);


module.exports = router;

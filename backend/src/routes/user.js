const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getByID);

router.post('/add', userController.addUser);

router.put('/update/:id', userController.updateUser);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
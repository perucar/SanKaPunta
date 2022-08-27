const express = require("express");
const router = express.Router();
const checkingToken = require('./../auth/token_validation')


const userController = require('./../controlller/usersController');


router.get('/', userController.getUsers);

router.get('/:id', checkingToken.checkToken, userController.getUserById);

router.post('/login', userController.loginUser);



module.exports = router;
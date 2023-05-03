const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");

router.get('/view/register', authController.viewRegister);
router.get('/view/login', authController.viewLogin);
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/logout', authController.logout);


module.exports = router; 
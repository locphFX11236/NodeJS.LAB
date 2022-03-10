const express = require('express');
const { check } = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.post('/login', authController.postLogin);
router.post(
    '/signup',
    check('email') // Xac thuc email
        .isEmail()
        .withMessage('Please enter a valid email.') // Ran gia tri vao errors.array()[0].msg
    ,
    authController.postSignup
);
router.post('/logout', authController.postLogout);

module.exports = router;
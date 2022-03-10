const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controllers/auth');
const User = require('../models/user');

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.post('/login', authController.postLogin);
router.post(
    '/signup',
    [
        check('email') // Xac thuc email
            .isEmail()
            .withMessage('Please enter a valid email.') // Ran gia tri vao errors.array()[0].msg
            .custom((value, { req }) => {
                return User
                    .findOne({ email: value })
                    .then(userDoc => {
                        if (userDoc) {
                            return Promise.reject('E-Mail exists already, please pick a different one.');
                        }
                    })
                ;
            })
        ,
        body(
            'password',
            'Please enter a password with only numbers and text and at least 3 characters.'
        ).isLength({ min: 3 }).isAlphanumeric(),
        body('confirmPassword').custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password and Password have to match.');
            }
            return true;
        })
    ],
    authController.postSignup
);
router.post('/logout', authController.postLogout);

module.exports = router;
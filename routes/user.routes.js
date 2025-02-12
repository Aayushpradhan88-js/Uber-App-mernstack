const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware')

//register user
router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
],
    userController.registerUser
);

//login User
router.post('/login', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
],
    userController.loginUser
)

//profile router
router.get('/profile', authMiddleware.authUser ,userController.getUserProfile)

router.get('/logout', authMiddleware.authUser ,userController.logoutUser)

module.exports = router
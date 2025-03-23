const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    // body('userId').isString().isLength({ min: 3 }).withMessage('Invalid userId'), //already checking the user through middleware
    body('destination').isString().isLength({ min: 3 }).withMessage('Invaid Destination'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invaid pickup address'),
    body('vechileType').isString().isIn([car, motorCycle, auto]).inValid('InvalidVechileType'),
    rideController.createRide
);

//getFare

router.get('/get-fare',
    authMiddleware.authUser,
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invaid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invaid Destination'),
    rideController.getFare
);

module.exports = router;
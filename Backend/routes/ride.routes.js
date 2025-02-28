const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rideController = require('../controllers/ride.controller');

router.post('/create',
    body('userId').isString().isLength({ min: 3 }).withMessage('Invalid userId'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invaid Destination'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invaid pickup address'),
    body('vechileType').isString().isIn([car, motorCycle, auto]).inValid('InvalidVechileType'),
    rideController.createRide

)

module.exports = router;
const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
        });
    };

    const [userId, vechileType, pickup, destination] = req.body;

    try {
        const rider = await rideService.createRide({
            user: req.user._id,
            vechileType,
            pickup,
            destination
        });

        res.status(200).json({
            rider
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    };
};

module.exports.getFare = async (req,res) => {}

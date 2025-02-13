const captainModel = require('../models/user.models')
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');
const blacklistToken = require('../models/blacklist.models')

module.exports.registerCaptain = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if (isCaptainAlreadyExist) {
        return res.status(400).json({ message: 'Captain already exist' });
    }

    const hashedPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
}

//login captain
module.exports.loginCaptain = async (req, res, next) => { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // Find the captain and explicitly select the password
    const captain = await captainModel.findOne({ email }).select("+password");

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare provided password with the hashed password
    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = captain.generateAuthToken();

    // Set the token in cookies (optional)
    res.cookie('token', token, { httpOnly: true });

    res.status(200).json({ token, captain });
};

//user profile
module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain })
}

//logout
module.exports.logout= async(req, res) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1])

    await blacklistToken.create({token})

    res.clearCookie('token');

    res.status(201).json({
        message: 'Youre successfully loggedout'
    })
}


const captainModel = require('../models/user.models')
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');


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
        res.status(401).json({
            errors: errors.array()
        })
    }

    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({
            message: "Email or password is required"
        })
    }

    const isEmail = await captainModel.findOne({ email });
    if (!isEmail) {
        res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isPasswordValid = await captainModel.comparePassword(password);
    if (!isPasswordValid) {
        res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = captainModel.generateAuthToken();
    res.cookie("token", token);
    res.status(201).json({
        token, isEmail
    })
}

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({captain: req.captain})


}
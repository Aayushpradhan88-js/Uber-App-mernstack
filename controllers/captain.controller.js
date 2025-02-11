const blacklistModel = require('../models/blacklist.models');
const captainModel = require('../models/captain.models');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')

module.exports.createRider = async (req, res) => {
    const error = validationResult();
    if (!error.isEmpty) {
        return res.status(500).json({message:"Fill the required fields"})
    };

    const { fullname, email, password, vechile } = req.body;

    const isCaptainAlreadyExist = await captainModel.find({ email });

    if (!isCaptainAlreadyExist) {
        return res.status(500).json({message:"Capatain is already exist"})
    };

    const hashedPassword = await captainModel.comparePassword(password);

    const captain = captainService.captainService({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vechile.color,
        plate: vechile.plate,
        capacity: vechile.capacity,
        vechileType: vechile.vechileType
    });

    const token = captain.generateAuthToken()
    res.cookie("token :", token)
}

const userModel = require('../models/user.models')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const BlackListTokens = require('../models/blacklist.models')
const captainModel = require('../models/captain.models')

module.exports.authUser = async (req, res, next) => {

    //login token
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);
    if (!token) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

    //logout
    const isBlacklisted = await BlackListTokens.findOne({token: token})
    if(isBlacklisted) {
        return res.status(400).json({
            message:"unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id);

        req.user = user

        return next()

    } catch (error) {
        return res.status(400).json({ message: "useer is unauthorized", error: error.message })
    }
}


module.exports.authCaptain = async (req, res, next) => {

    //Checking the token or headers
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization?.split(' ')[1]);
    if (!token) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

    //logout
    const isBlacklisted = await BlackListTokens.findOne({token: token})
    if(isBlacklisted) {
        return res.status(400).json({
            message:"unauthorized"
        })
    }

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const captain = await captainModel.findById(decoded._id);
        req.captain = captain
        return next()

    } catch (error) {
        return res.status(400).json({ message: "unauthorized user", error: error.message })
    }
}
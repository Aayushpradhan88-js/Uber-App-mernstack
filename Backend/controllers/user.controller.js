const { validationResult } = require('express-validator')
const userModel = require('../models/user.models')
const userService = require('../services/user.service')
const blacklistModel = require('../models/blacklist.models')

//register user
module.exports.registerUser = async (req, res) => {
    const error = validationResult(req)
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array(),
            message: "Invalid credintals"
        })
    }
    
    try {
        //creating user hashing password
        const { fullname, email, password } = req.body

        const hashedPassword = await userModel.hashPassword(password)

        const user = await userService.createUserService({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        })

        //generating token 
        const token = user.generateAuthToken()
        res.status(201).send({ token, user })

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


//login User
module.exports.loginUser = async (req, res) => {

    const error = validationResult(req)
    if (!error.isEmpty()) { //checking is there any field is empty
        return res.status(400).json({
            error: error.array(),
            message: "Invalid credintals"
        })
    }

    const { email, password } = req.body //destructring the form data

    const user = await userModel.findOne({ email }).select('+password')//finding email and password
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const isMatch = await user.comparePassword(password) //checking password
    if (!isMatch) { //handling password error by user
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const token = user.generateAuthToken() //generating token for user
    console.log("Generated Token:", token); // Debugging log

    res.status(200).send({ token, user })
}

//user profile
module.exports.getUserProfile = async (req, res, next) => {
    console.log("Profile route hit! User:", req.user);
    res.status(200).json(req.user)

}

module.exports.logoutUser = async (req, res)=>{

    req.clearCookie('token'); //clearing all the browser tokens 
    const Token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    await blacklistModel.BlackListTokens.create(Token);


    res.status(200).send('User is successfully loggedOut')
}
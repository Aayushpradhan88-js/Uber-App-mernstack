const userModel = require('../models/user.models');

module.exports.createUserService = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error("Invalid credentails")
    };

    //creating user
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password
    });

    return user; //returning the user
};

//this particular code is use to create a user.
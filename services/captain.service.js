const captainModel = require('../models/captain.models');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vechileType
}) => {
    if (!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechileType) {
        throw Error("All fields are required");
    }

    const captainFields = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vechile: {
            color,
            plate,
            capacity,
            vechileType
        }
    });
    return captainFields;
}
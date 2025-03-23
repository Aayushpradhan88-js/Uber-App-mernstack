const rideModel = require('../models/ride.models');
const maps = require('./maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('pickup and destination are required');
    };

    const distanceTime = await maps.get('pickup', 'destination');

    const baseFare = {
        auto: 30,
        car: 50,
        motorCycle: 20,
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        motorCycle: 8,
    };

    const perMinuteRatio = {
        auto: 2,
        car: 3,
        motorCycle: 1.5,
    };

    const fare = {
        //auto
        auto: Math.round((baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRatio.auto))),

        //car
        car: Math.round((baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRatio.car))),

        //motorcycle
        motorCycle: Math.round((baseFare.motorCycle + ((distanceTime.distance.value / 1000) * perKmRate.motorCycle) + ((distanceTime.duration.value / 60) * perMinuteRatio.motorCycle))),
    };

    return fare;
};

module.exports.getFare = getFare;

//otp generation for rider
function getOTP(num) {
    function generateOPT() {
        const otp = crypto.randomInt(Math.pow((10, 10-num), Math.pow(10, num))).toString();
        return opt;
    };
    return generateOPT(num);
};

module.exports.createRide = async ({
    user, destination, pickup, vechileType
}) => {

    if (!user || !destination || !pickup || !vechileType) {
        throw new Error("All fields ar required");
    }

    const fare = await getFare(pickup, destination);

    const rides = rideModel.create({
        user,
        destination,
        pickup,
        otp: getOTP(6),
        fare: fare[vechileType]
    });

    return rides;
};
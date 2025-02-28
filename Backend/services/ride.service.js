const rideModel = require('../models/ride.models');
const maps = require('./maps.service');


async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('pickup and destination are required');
    };

    const distanceTime = await maps.get('pickup', 'destination');

    const baseFare = {
        auto: 30,
        car: 50,
        motorCycle: 20,
    }

    const perKmRate = {
        auto: 10,
        car: 15,
        motorCycle: 8,
    }

    const perMinuteRatio = {
        auto: 2,
        car: 3,
        motorCycle: 1.5,
    }

    const fare = {
        //auto
        auto: Math.round((baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRatio.auto))),

        //car
        car: Math.round((baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRatio.car))),

        //motorcycle
        motorCycle: Math.round((baseFare.motorCycle + ((distanceTime.distance.value / 1000) * perKmRate.motorCycle) + ((distanceTime.duration.value / 60) * perMinuteRatio.motorCycle))),
    }

    return fare;
}


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
        fare: fare[vechileType]
    })
}
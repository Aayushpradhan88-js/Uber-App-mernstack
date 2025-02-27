const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captain',
    },

    destination: {
        type: String,
        required: true,
    },

    pickup: {
        type: String,
        required: true
    },

    fare: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ['pending', 'ongoing', 'accepted', 'completed', 'canclled'],
        default: 'pending',
    },

    duration: {
        type: String,
    },
    distance: {
        type: String,
    },

    //Important field must for the rider
    paymentId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    signature: {
        type: String,
    }
});

module.exports = mongoose.model('Rides', rideSchema);
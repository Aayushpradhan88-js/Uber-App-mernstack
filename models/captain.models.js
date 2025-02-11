const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
        }
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        Selection: false
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: [active, inactive],
        default: 'inactive',
    },

    vechile: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: String,
            required: true,
            min: [1, 'Capacity must be atleast 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },

    loaction: {
        ltd: {
            type: Number,
        },
        lng:{
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

captainSchema.method.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captatinSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Socket } = require('socket.io')

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minLength: 3
        },
        lastname: {
            type: String,
            required: true
        },
    },

    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
        minLength: 6

    },
    SocketId: {
        type: String
    }
})

//For generating token
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET), { expireIn: '24hours' }

}

//hashing password(signup)
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

//comparing password(login)
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const userModel = mongoose.model('user', userSchema)
module.exports = userModel
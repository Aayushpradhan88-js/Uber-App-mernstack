const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type: String,
        unique: true,
        required: true
    },
    createdAt:{
        type: Date,
        required: Date.now(),
        expires: 86400 //expires in 1 day = 86400 seconds 
    }
    
})

const BlackListTokens = mongoose.model('BlackListTokens', blacklistTokenSchema)
module.exports = BlackListTokens
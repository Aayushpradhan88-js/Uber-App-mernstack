const mongoose = require('mongoose')

function connection() {
    mongoose.connect(process.env.DB_CONNECTION
    ).then(() => {
        console.log("connected")
    }).catch(error => console.log("failed to connect", error))


}

module.exports = connection
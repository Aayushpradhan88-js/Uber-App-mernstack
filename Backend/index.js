const dotenv = require('dotenv');
dotenv.config();
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connection = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const mapRoutes = require('./routes/map.routes')
const rideRoutes = require('./routes/ride.routes')

const app = express();
app.use(cors());
connection()
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users', userRoutes);
app.use('/captain', captainRoutes);
app.use('/maps', mapRoutes);
app.use('/ride', rideRoutes);

module.exports = app;
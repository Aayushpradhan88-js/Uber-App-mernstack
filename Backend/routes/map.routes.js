const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const {query} = require('express-validator');
const { getCoordinates } = require('../services/maps.service');

router.post('/get-coordinates', 
    query('address').isString().isLength({min: 3}),
    authMiddleware.authUser,
    mapController.getCoordinates
)

router.post('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isLength({min:3}).isString(),
    authMiddleware.authUser,
    mapController.getCoordinates

)
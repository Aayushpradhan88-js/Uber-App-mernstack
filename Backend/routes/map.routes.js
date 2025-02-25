const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map.controller');
const {query} = require('express-validator');
const { getCoordinates } = require('../services/maps.service');

router.post('/get-coordinates', 
    authMiddleware.authUser,
    query('address').isString().isLength({min: 3}),
    getCoordinates
)
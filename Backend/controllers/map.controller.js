const mapService = require('../services/map.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async () => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        })
    }

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json({ coordinates });
    } catch (error) {
        res.status(400).json({ message: 'Coordinates not found' });
    }
}
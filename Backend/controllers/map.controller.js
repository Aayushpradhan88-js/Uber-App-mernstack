const mapService = require('../services/map.service');
const { validationResult } = require('express-validator');

//getCoordinates
module.exports.getCoordinates = async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            error: error.array()
        });
    };

    const { address } = req.query;

    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        res.status(200).json({ coordinates });
    } catch (error) {
        res.status(400).json({ message: 'Coordinates not found' });
    };
};;

//getDistanceTime
module.exports.getDistanceTimes = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            errors: errors.array()
        });
    };

    try {
        const { origin, destination } = req.query;
        const coordinates = await mapService.getDistanceTime(origin, destination);
        if (!coordinates) {
            throw new Error('No routes Found !!');
        };

        return res.status(200).json({ coordinates });
    } catch (error) {
        res.status(400).json({ messages: 'Origin and destination error' });
    };
};

//AutoSuggestion Feature
module.exports.getAutoSuggestion = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ message: 'field is required' });
    };

    try {
        const { input } = req.query;
        const suggestions = mapService.getAutoCompleteSuggestion(input);

        return res.status(200).json(suggestions);

    } catch (error) {
        res.status(400).json({ messages: 'input error' });
    };
};
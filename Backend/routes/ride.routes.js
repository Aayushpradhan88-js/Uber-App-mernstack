const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

router.post('/create',
    body('userId').isString().isLength({ min: 3 }).withMessage('Invalid userId'),
    body('destination').isString().isLength({min: 3}).withMessage('Invaid Destination'),
    body('pickup').isString().isLength({min: 3}).withMessage('Invaid pickup address'),

)

module.exports = router;
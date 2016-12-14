// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot = require('../spot');

// Routes
Spot.methods(['get', 'put', 'post', 'delete']);
Spot.register(router, '/iteam');

// Return router
module.exports = router;
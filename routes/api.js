
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot_pending = require('../models/iteam');

// Routes
Spot_pending.methods(['get', 'put', 'post', 'delete']);
Spot_pending.register(router, '/iteam');

// Return router
module.exports = router;
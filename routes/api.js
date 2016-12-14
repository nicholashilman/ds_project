
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var iteam = require('../models/iteam');

// Routes
iteam.methods(['get', 'put', 'post', 'delete']);
iteam.register(router, '/iteam');

// Return router
module.exports = router;
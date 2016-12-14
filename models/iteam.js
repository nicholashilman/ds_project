
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var iteam = new mongoose.Schema({
	first: String,
	last: String,
	email: String,
	phone: String,
	title: String,
	price: String
});

// Return model
module.exports = restful.model('iteam', iteam);
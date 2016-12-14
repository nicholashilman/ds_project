//
var restful = require('node-restful');
var mongoose = restful.mongoose;

//
var spotSchema = new mongoose.Schema({
	first: String,
	last: String,
	email: String,
	phone: String,
	title: String,
	price: String,
});

//
module.exports = restful.model('iteam', spotSchema);
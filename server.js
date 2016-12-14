// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var parseUrlEnconded = bodyParser.urlencoded({
  extended: false
});

// MongoDB
mongoose.connect('mongodb://localhost/parking_bee');

// Express
var app = express();

// View Engine
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from ./public folder
app.use(express.static(path.join(__dirname, 'public')));        

// Routess
	//EJS Routes 
	app.get('/', function(req, res) {
		res.render("list.ejs");
	});

	app.get('/buy', function(req, res) {
		res.render("buy.ejs");
	});

//End EJS Routes - sorry really have to put this into a seperate file at some point ...

	app.use('/api', require('./routes/api'));

// Start server
app.listen(3030);
console.log('API is running on port 3030');
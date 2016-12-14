//
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

//
var parseUrlEnconded = bodyParser.urlencoded({
  extended: false
});

//
mongoose.connect('mongodb://localhost/ds_proj');

//
var app = express();

//
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
app.use(express.static(path.join(__dirname, 'public')));        

//
app.get('/', function(req, res) {
	res.render("list.ejs");
});

app.get('/view_orders', function(req, res) {
	res.render("view.ejs");
});

//
app.use('/api', require('./api'));

//
app.listen(9000);
console.log('API is running on port 9000');
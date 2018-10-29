
/**
 * Simple example for NodeJs - Vue.js
 * 
 * Flavien Solt
 * VP Binet Réseau, X2016
 */

// For Express
var express = require('express');
var app = express();

var path = require('path');
var fs = require('fs');

// To easily parse POST requests
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// Templates
var exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
  defaultLayout: 'layout',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs')

// To manage the routes in the URL
var router = express.Router()

var routes = require("./routes.js")(app, express, router, fs)
app.use(routes)

app.listen(8088)

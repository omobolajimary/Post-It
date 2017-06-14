const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// Set up the express app
const app = express();
var index = require('./routes/index');
var users = require('./routes/users');
var catalog = require('./routes/postIt');  //Import routes for "catalog" area of site
// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('template', path.join(__dirname, 'template'));
app.use(express.static('static'));
app.use('/', index);
app.use('/users', users);
app.use('/catalog', postIt); 


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
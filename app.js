const express = require('express');
const app = express();
const userRoute = require('./server/routes/index');
const bodyParser = require('body-parser');
const logger = require('morgan');

// Set up the express app


// Log requests to the console.
app.use(logger('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', function (req, res) {
  res.send('Welcome to Post It');
});

app.use('/', userRoute);



module.exports = app;
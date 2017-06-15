var express = require('express');
var router = express.Router();

// Require controller modules
var group_controller = require('../controllers/groupController');
var message_controller = require('../controllers/messageController');
var user_controller = require('../controllers/userController');
var group_user_controller = require('../controllers/groupUserController');


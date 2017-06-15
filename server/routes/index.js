const express = require('express');
const userController = require('../controller').user;

const router = express.Router();
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Post It',
  }));

  
// router.post('/api/user/signup',userController.signup);

};
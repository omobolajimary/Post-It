const express = require('express');
const usersController = require('../controller').users;


module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Post It',
  }));
app.post('api/users/signup',usersController.signup);
  
//  router.post('/api/user/signup',userController.signup);
//  console.log (userController)
};
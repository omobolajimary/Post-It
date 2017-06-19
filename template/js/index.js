var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: ' ' });
});

router.get('/login', function(req, res, next){
  res.render('login',{title:'login'})
});
router.get('/signup', function(req, res, next){
  res.render('signup',{title:'signup'})
});

router.get('/createGroup', function(req, res, next){
  res.render('createGroup',{title:'createGroup'})
});

router.post('/signup', function(req, res, next){
  console.log(req.body.email)
   var email = req.body.email;
   var password = req.body.password;
   })
module.exports = router;
const user = require("../models").user;


exports.signup = (req, res) => {
  if(req.body.username === ""){
    res.status(400).send({ status: false, message:'Username is required'});
  }
  else if(req.body.password === ""){
    res.status(400).send({ status: false, message:'Password is required'});
  }
  else if (req.body.email === "") {
    res.status(400).send({ status: false, message:'Email is required'});
  }
  User.findOne({
    where: {
      username: req.body.username,
    },
  })
  .then((user) => {
    if(user){
      res.status(400).send({ status: false, message:'Username already exist'});
    }
    else{
      User.create({
        username: req.body.username,
        password :(req.body.password),
        email: req.body.email
      })
      .then((user) => {
        res.status(200).send({ status: true, message:'Successful', data: user});
      });
    }
  });

};
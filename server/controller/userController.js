const user = require("../models").user;

// module.exports = {
// signup(req, res){
//   if(req.body.userName === ""){
//     res.status(400).send({ status: false, message:'Username is required'});
//   }
//   else if(req.body.password === ""){
//     res.status(400).send({ status: false, message:'Password is required'});
//   }
//   else if (req.body.email === "") {
//     res.status(400).send({ status: false, message:'Email is required'});
//   }
//   else if (req.body.password != req.body.confirmPassword){
//     res.json({message:"Please ensure the Password match"})
//   }
  // user.findOne({
  //   where: {
  //     userName: req.body.userName,
  //   },
  // })
  // .then((user) => {
  //   if(user){
  //     res.status(400).send({ status: false, message:'Username already exist'});
  //   }
  module.exports = {
  signup(req, res) {
    if(req.body.userName === ""){
      res.json({message:"userName is required"})
      }
    else if (req.body.email === ""){
      res.json({message:"Email is required"})
    }
    else if (req.body.password === ""){
      res.json({message:"Password is required"})
    }
    else if (req.body.password != req.body.confirmPassword){
      res.json({message:"Please ensure the Password match"})
    }
    else
        { 
      return user
        .create({
          name: req.body.name,
          password: req.body.password,
          confirmpassword: req.body.confirmpassword,
          email: req.body.email,
          phone: req.body.phone
        })

        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
  }
    },
  };
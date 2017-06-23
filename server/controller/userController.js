const user = require("../models").user;
const group = require("../models").group;
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("my password", salt);
const jwt = require("jsonwebtoken");
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
      user.findOne({
      where: {
        userName: req.body.userName,
      },
    })
    .then((User) => {
      if(User){
        res.status(400).send({ status: false, message:'Username already exist'});
      }
      else{
        user.create({
          userName: req.body.userName,
          password :bcrypt.hashSync((req.body.password), salt),
          confirmPassword: req.body.confirmPassword,
          email: req.body.email
        })
        .then((User) => {
          res.status(200).send({ status: true, message:'Successful', data: User});
        });
      }
    });
    },
    login (req, res) {
      user.findOne({
        where: {
          userName: req.body.userName,
        },
      })
      .then((User,err) => {
        if(!User){
          res.status(404).send({ status: false, message:'Authentication failed. User not found'});
          }
        else if(User){
          if(bcrypt.compareSync(req.body.password, User.password)){
            const token = jwt.sign({
                  data: User
                }, 'secret', { expiresIn: "1440" });
            res.status(200).send({ status: true, message:'Authentication Successful', token: token});
          }else{
            res.status(401).send({ status: false, message:'Authentication failed. Incorrect Password'});
          }
        }
      })
    },
  createGroup(req,res) {
    if(req.body.groupName === ""){
      res.json({message:"Group Name is required"})
    }
    group.findOne({
      where: {
        groupName: req.body.groupName,
      },
    })
    .then((Groupname) =>{
      if(Groupname){
        res.status(400).send({status:false, message:'Group Name already exist'});
      }
      else{
        const userId = req.decoded.data.id;
        group.create({
          groupName:req.body.groupName,
          userId:userId
        })
        .then((Groupname) =>{
          res.status(200).send({ status: true, message:'Successful', data: groupName});
        });
      }
    })
  }


  //npm install --save jsonwebtoken




  }

const User = require('../models/user');

module.exports={

    signup: (req,res,next) => {
        User
        .create({email: req.body.email,
        userName:req.body.string,
        password:req.body.password})
        .then(user=> res.status(201).send(user))
        .catch(error => res.status(400).send(error));
        
    }
};




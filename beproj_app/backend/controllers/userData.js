const User=require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.getUser=function(req,res){
  res.send(req.user);

}

exports.authenticateUser = function(req,res,next){
passport.authenticate("local",(err,user,info)=>{
  if(err) throw err;
  if(!user) res.status(403).send("No user Exists");
  else{
    req.logIn(user,err =>{
      if(err) throw err;
      res.status(200).send("Successfully LoggedIn");
      console.log(req.user);
    })
  }
})(req, res, next);
}

exports.registerUser = function(req,res) {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.status(403).send("User Already Exists");
        if (!doc) {
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
          const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
          });
          await newUser.save();
          res.status(200).send("User Created");
        }
      });
}
const User=require("../models/user");
const bcrypt = require("bcryptjs");

exports.authenticateUser = function(req,res,next){

}

exports.registerUser = function(req,res,next) {
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
const express=require("express");
const router=express.Router();
const{authenticateUser,registerUser,getUser, logoutUser}=require("../controllers/userData");


router.get("/",getUser);

router.post("/login",authenticateUser);

router.post("/register",registerUser);

router.post("/logout",logoutUser);


module.exports=router;
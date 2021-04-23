const express=require("express");
const router=express.Router();
const{authenticateUser,registerUser,getUser}=require("../controllers/userData");


router.get("/",getUser);

router.post("/login",authenticateUser);

router.post("/register",registerUser);

module.exports=router;
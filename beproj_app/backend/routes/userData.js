const express=require("express");
const router=express.Router();
const{authenticateUser,registerUser}=require("../controllers/userData");


// router.get("/login",getUser);

router.post("/login",authenticateUser);

router.post("/register",registerUser);

module.exports=router;
const express=require("express");
const router=express.Router();
const {getMaps,uploadMap} =require("../controllers/geoJsonData");
const middleware=require('../controllers/middleware');

router.get("/allMaps",middleware.isLoggedIn,getMaps);

router.post("/uploadMap",middleware.isLoggedIn,uploadMap);


module.exports=router;
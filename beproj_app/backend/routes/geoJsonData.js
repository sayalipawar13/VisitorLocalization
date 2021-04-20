const express=require("express");
const router=express.Router();
const {getMaps,uploadMap} =require("../controllers/geoJsonData");

router.get("/allMaps",getMaps);

router.post("/uploadMap",uploadMap);


module.exports=router;
const express=require('express');
const router=express.Router();
const {viewMap} =require('../controllers/visitorMap');

router.post("/viewMap",viewMap);

module.exports=router;
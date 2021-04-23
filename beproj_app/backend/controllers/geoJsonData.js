const Map = require('../models/map');
const User=require("../models/user");

exports.getMaps = async (req, res) => {
  try {
    const maps = await Map.find();

    return res.status(200).json({
      success: true,
      count: maps.length,
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.uploadMap = async (req, res) => {
    try {
      console.log(req.body);
      const map = new Map(
        {
        GeoJsonMap:req.body.geojson.GeoJsonMap,
        createdAt:req.body.geojson.createdAt,
        owner:req.body.username
      }
      // req.body
      );

    const result = await map.save();
      return res.status(200).json({
          success:true,
          data: result
      });

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        error: "There is some issue uploading a file.Try Again",
      });
    }
  };

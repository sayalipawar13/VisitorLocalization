const Map = require('../models/map');

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
      const map = new Map(req.body);

    const result = await map.save();
      
      return res.status(200).json({
          success:true,
          data: result
      });

    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "There is some issue uploading a file.Try Again",
      });
    }
  };

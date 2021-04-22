const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
  GeoJsonMap: {
    type: Object, //needs to be confirmedddd
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    // type:mongoose.Schema.Types.ObjectId,
    type:String,
    ref: "user",
  },
});

module.exports = mongoose.model("geoJsonMaps", MapSchema);

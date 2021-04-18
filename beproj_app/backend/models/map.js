const mongoose=require("mongoose");

const MapSchema = new mongoose.Schema({
    GeoJsonMap:{
        type:Object,  //needs to be confirmedddd
    },
    createdAt:{
type:Date,
default:Date.now
    }
});

module.exports = mongoose.model("geoJsonMaps",MapSchema);
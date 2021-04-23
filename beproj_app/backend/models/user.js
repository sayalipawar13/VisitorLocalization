const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
      type:String,
      required: true,
      unique: true,
  },
  password: String,
  maps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "geoJsonMaps",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);

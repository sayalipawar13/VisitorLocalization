const Map = require("../models/map");
const mongoose=require('mongoose');

exports.viewMap = function (req, res) {
    console.log(req.body);
  Map.findById(req.body.id, function (err, val)  {
    if (err) throw err;
    if (val) res.send(val);
    if (!val) res.status(403).send("Wrong QR code scanned");
  });
};

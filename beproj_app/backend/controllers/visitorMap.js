const Map = require("../models/map");
const mongoose = require("mongoose");

exports.viewMap = function (req, res) {
  // console.log(req.body);
  const id = req.body.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    // Yes, it's a valid ObjectId, proceed with `findById` call.
    Map.findById(id, function (err, val) {
      if (err) throw err;
      if (val) res.send(val);
      if (!val) {
        console.log(!val);
        res.status(403).send("Wrong QR code scanned");
      }
    });
  } else {
    res.status(403).send("Wrong QR code scanned");
  }
};

// exports.viewMap = async (req, res)=> {
// const x=await Map.findById(req.body.id);
// console.log(x);
// if(x) res.send(x)
// if(!x)  res.status(403).send("Wrong QR code scanned")

// };

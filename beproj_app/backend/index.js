const express=require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const dotenv=require("dotenv");
const connectDB=require("./config/db");

dotenv.config({path:"./config/config.env"});

//Database connection
connectDB();

const app=express();

//allows us to use bodyparser
app.use(express.json());
// app.use(
//     cors({
//       origin: "192.168.0.3:3000", // <-- location of the react app were connecting to
//       credentials: true,
//     })
//   );
  app.use(
    session({
      secret: "secretcode",
      resave: true,
      saveUninitialized: true,
    })
  );
  app.use(cookieParser("secretcode"));
const userData=require("./routes/userData");
const geojsonData=require("./routes/geoJsonData");


//user visits login page
app.use("/user",userData);

//after login user will see his/her data
app.use("/api/maps",geojsonData);

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server running at port ${PORT}`))
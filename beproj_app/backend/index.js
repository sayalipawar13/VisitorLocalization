const express=require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db");

dotenv.config({path:"./config/config.env"});

//Database connection
connectDB();

const app=express();

//allows us to use bodyparser
app.use(express.json());

const geojsonData=require("./routes/geoJsonData");




app.use("/api/maps",geojsonData);

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server running at port ${PORT}`))
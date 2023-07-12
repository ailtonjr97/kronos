//jshint esversion:6
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const sb1 = require("./routes/sb1.js");
const sa1 = require("./routes/sa1.js");
const sc5 = require("./routes/sc5.js");

const app = express();


mongoose.connect(process.env.MONGOSTRING);

app.use("/sb1", sb1);
app.use("/sa1", sa1);
app.use("/sc5", sc5);

app.listen(process.env.PORT, function () {
  console.log("Node.js operational at port " + process.env.PORT);
});

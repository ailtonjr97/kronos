//jshint esversion:6
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const sb1 = require("./routes/sb1.js");
const sa1 = require("./routes/sa1.js");
const sc5 = require("./routes/sc5.js");
const sc6 = require("./routes/sc6.js");
const sd2 = require("./routes/sd2.js");
const sf2 = require("./routes/sf2.js");

const app = express();

mongoose.connect(process.env.MONGOSTRING);

app.use("/sb1", sb1);
app.use("/sa1", sa1);
app.use("/sc5", sc5);
app.use("/sc6", sc6);
app.use("/sd2", sd2);
app.use("/sf2", sf2);


app.listen(process.env.PORT, function () {
  console.log("Node.js operational at port " + process.env.PORT);
});

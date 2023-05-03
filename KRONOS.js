//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
const empresaFilial = require("./routes/empresaFilial.js");
const produtos = require("./routes/produtos.js");
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use("/protheus", empresaFilial);
app.use("/protheus", produtos);

//-------------------------------------------------------------------------------
app.listen(process.env.PORT, function () {
  console.log("Servidor Node.js operacional na porta " + process.env.PORT);
});

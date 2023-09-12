const mongoose = require("mongoose");

const cliente = new mongoose.Schema({
  cod: String,
  tipo: String,
  um: String,
  grupo: String,
  peso: Number,
  urev: String,
  desc: String,
  pesbru: Number
});

module.exports = mongoose.model("Cliente", cliente);
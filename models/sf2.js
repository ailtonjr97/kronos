const mongoose = require("mongoose");

const cabecalhoNFSaida = new mongoose.Schema({
    emissao: String,
    filial: String,
    chvnfe: String,
    doc: String,
    serie: String,
    cliente: String,
    loja: String,
    tipocli: String,
    vend1: String,
    fimp: String,
});

module.exports = mongoose.model("CabecalhoNFSaida", cabecalhoNFSaida);
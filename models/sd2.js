const mongoose = require("mongoose");

const itensVendaNF = new mongoose.Schema({
    loja: String,
    filial: String,
    doc: String,
    serie: String,
    cliente: String,
    item: String,
    cod: String,
    um: String,
    pedido: String,
    tipo: String,
    origlan: String,
    tes: String,
    cf: String,
    quant: Number,
    prunit: Number,
});

module.exports = mongoose.model("ItensVendaNF", itensVendaNF);
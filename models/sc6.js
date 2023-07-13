const mongoose = require("mongoose");

const itensPedidosVenda = new mongoose.Schema({
    loja: String,
    num: String,
    item: String,
    produto: String,
    qtdven: Number,
    qtdent: Number,
    prcven: Number,
    descont: Number,
    valor: Number,
    oper: String,
    tes: String,
    cf: String,
    cli: String,
    entreg: String,
    datfat: String,
    nota: String,
    blq: String,
});

module.exports = mongoose.model("ItensPedidosVenda", itensPedidosVenda);
const Produto = require("../models/produtos.js")
const axios = require("axios");

const atualizar = async(req, res)=>{
  try {
    const response = await axios(process.env.APITOTVS + "CONSULTA_PRO/get_all?page=10&limit=30000", {auth: {username: "admin", password: process.env.SENHAPITOTVS}})
    await Produto.deleteMany();
    Produto.create(response.data.objects);
    res.send("Operação concluída.")
  } catch (error) {
      res.send("Erro ao executar")
  }
}

const consultar = async(req, res)=>{
  res.send(await Produto.find())
}

module.exports = {
  atualizar,
  consultar
}
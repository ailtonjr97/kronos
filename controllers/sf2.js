const CabecalhoNFSaida = require("../models/sf2.js")
const axios = require("axios");

const atualizar = async(req, res)=>{
  try {
      const limitador = await axios.get(process.env.APITOTVS + "CONSULTA_SF2/get_all", {auth: {username: "admin", password: process.env.SENHAPITOTVS}})
      const response = await axios.get(process.env.APITOTVS + "CONSULTA_SF2/get_all?limit=" + limitador.data.meta.total, {auth: {username: "admin", password: process.env.SENHAPITOTVS}})
      await CabecalhoNFSaida.deleteMany();
      CabecalhoNFSaida.create(response.data.objects);
      res.send("Success")
  } catch (error) {
      res.send("Error")
  }
}

const consultar = async(req, res)=>{
  try {
      res.send(await CabecalhoNFSaida.find())
  } catch (error) {
      res.send("Error")
  }
}


module.exports = {
  atualizar,
  consultar,
}
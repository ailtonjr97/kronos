const Clientes = require("../models/sa1.js")
const axios = require("axios");

const atualizar = async(req, res)=>{
  try {
    const auth = {login: process.env.LOGININTRANET, password: process.env.SENHAINTRANET}

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
    if (login && password && login === auth.login && password === auth.password) {
      const limitador = await axios.get(process.env.APITOTVS + "CONSULTA_SA1/get_all", {auth: {username: "admin", password: process.env.SENHAPITOTVS}})
      const response = await axios.get(process.env.APITOTVS + "CONSULTA_SA1/get_all?limit=" + limitador.data.meta.total, {auth: {username: "admin", password: process.env.SENHAPITOTVS}})
      await Clientes.deleteMany();
      Clientes.create(response.data.objects);
      res.send("Success")
    }else{
      res.status(401).send("Denied");
    }
  } catch (error) {
      res.send("Error")
  }
}

const consultar = async(req, res)=>{
  try {
    const auth = {login: process.env.LOGININTRANET, password: process.env.SENHAINTRANET}

    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
    if (login && password && login === auth.login && password === auth.password) {
      res.send(await Clientes.find())
    }else{
      res.status(401).send("Denied");
    }
  } catch (error) {
      res.send("Error")
  }
}


module.exports = {
  atualizar,
  consultar,
}
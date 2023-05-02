const express = require("express");
const router = express.Router();
const dotenv = require("dotenv")
const axios = require("axios")
dotenv.config();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})


router.use("/empresas", async (req, res,) => {
    try {
      await axios
        .get(process.env.APITOTVS + "api/framework/environment/v1/companies", {
          auth: {
            username: process.env.USER,
            password: process.env.SENHAPITOTVS,
          },
        })
        .then((response) => {
          res.send(response.data.items)
        });
    } catch (err) {
      return res.send(
        "Erro ao retornar lista das empresas Protheus. Tente novamente mais tarde."
      );
    }
  });
  //-------------------------------------------------------------------------------
  router.use("/filiais", async (req, res) => {
    try {
      await axios
        .get(process.env.APITOTVS + "api/framework/environment/v1/branches", {
          auth: {
            username: process.env.USER,
            password: process.env.SENHAPITOTVS,
          },
        })
        .then((response) => {
          res.send(response.data.items)
        });
    } catch (err) {
      return res.send(
        "Erro ao retornar lista das filiais Protheus. Tente novamente mais tarde."
      );
    }
  });
  //------------------------------------------------------------------------------
  module.exports = router;
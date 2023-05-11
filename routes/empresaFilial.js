const express = require("express");
const router = express.Router();
const dotenv = require("dotenv")
const axios = require("axios")
dotenv.config();


router.use("/empresas", async (req, res,) => {
    try {
      await axios
        .get(process.env.APITOTVS + "api/framework/environment/v1/companies", {
          auth: {
            username: "admin",
            password: process.env.SENHAPITOTVS,
          },
        })
        .then((response) => {
          res.send(response.data.items)
        });
    } catch (err) {
      return res.send(
        err
      );
    }
  });
  //-------------------------------------------------------------------------------
  router.use("/filiais", async (req, res) => {
    try {
      await axios
        .get(process.env.APITOTVS + "api/framework/environment/v1/branches", {
          auth: {
            username: "admin",
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
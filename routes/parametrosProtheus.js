const express = require("express");
const router = express.Router();
const dotenv = require("dotenv")
const axios = require("axios")
dotenv.config();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})


router.use("/parametros", async (req, res,) => {
    try {
      await axios
        .get(process.env.APITOTVS + "acdmob/products/", {
          auth: {
            username: process.env.USER,
            password: process.env.SENHAPITOTVS,
          },
        })
        .then((response) => {
          res.send(response.data.products)
        });
    } catch (err) {
      return res.send(
        "Erro ao retornar lista dos produtos Protheus. Tente novamente mais tarde."
      );
    }
  });
  module.exports = router;
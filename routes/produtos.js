const express = require("/var/www/html/kronos/node_modules/express");
const router = express.Router("/var/www/html/kronos/node_modules/express");
const dotenv = require("/var/www/html/kronos/node_modules/dotenv");
const bodyParser = require("/var/www/html/kronos/node_modules/body-parser");
const axios = require("/var/www/html/kronos/node_modules/axios");
dotenv.config();
const app = express();
const ProdutoProtheus = require("/var/www/html/kronos/models/produtos.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

router.get("/", async (req, res, next) => {
  ProdutoProtheus.find().then((data)=>{
    res.send(data)
  })
});

router.get("/atualizar", async (req, res, next) => {
  try {
    await axios
      .get(process.env.APITOTVS + "ACDMOB/products/?pagesize=21000", {
        auth: {
          username: "admin",
          password: process.env.SENHAPITOTVS,
        },
      })
      .then((response) => {
        ProdutoProtheus.deleteMany().then(() => {
          let produtos = response.data.products;
          ProdutoProtheus.insertMany(produtos)
            .then(() => {
              res.send("Tabela atualizada com sucesso." + " Clique " + "<a href='http://192.168.0.88/protheus/produtos'>aqui</a>" + " para voltar.");
            })
            .catch((error) => {
              res.send(error);
            });
        });
      });
  } catch (err) {
    res.send(err);

  }
});


module.exports = router;
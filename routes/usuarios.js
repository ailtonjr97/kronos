const express = require("/var/www/html/kronos/node_modules/express");
const router = express.Router("/var/www/html/kronos/node_modules/express");
const dotenv = require("/var/www/html/kronos/node_modules/dotenv");
const bodyParser = require("/var/www/html/kronos/node_modules/body-parser");
const axios = require("/var/www/html/kronos/node_modules/axios");
dotenv.config();
const app = express();
const UserProtheus = require("/var/www/html/kronos/models/usuarios.js");

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
  UserProtheus.find().then((dados)=>{
    res.send(dados)
  })
});

router.get("/atualizar", async (req, res, next) => {
  try {
    await axios
      .get(process.env.APITOTVS + "users", {
        auth: {
          username: "admin",
          password: process.env.SENHAPITOTVS,
        },
      })
      .then((response) => {
        UserProtheus.deleteMany().then(() => {
          let users = response.data.resources;
          UserProtheus.insertMany(users)
            .then((users) => {
                  res.send("Tabela atualizada com sucesso." + " Clique " + "<a href='http://192.168.0.88/protheus/usuarios'>aqui</a>" + " para voltar.")
            })
        });
      });
  } catch (err) {
    res.send("Erro ao atualizar tabela")
  }
});

router.get("/exclui/:userId", async (req, res, next) => {
  try {
    await axios
      .delete(process.env.APITOTVS + "Users/" + req.params.userId, {
        auth: {
          username: "admin",
          password: process.env.SENHAPITOTVS,
        },
      })
      .then((response) => {
        res.send("Usuário inativado." + " Clique " + "<a href='http://192.168.0.88/protheus/usuarios'>aqui</a>" + " para voltar.");
      });
  } catch (err) {
    return res.send("Erro ao excluir usuário");
  }
});


module.exports = router;
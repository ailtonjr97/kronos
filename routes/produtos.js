const express = require("express");
const router = express.Router();
const {atualizar, consultar} = require("../controllers/produtos.js");

router.get("/atualizar", atualizar);
router.get("/consultar", consultar);


module.exports = router;
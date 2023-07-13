const express = require("express");
const router = express.Router();
const {atualizar, consultar} = require("../controllers/sc6.js");

router.get("/atualizar", atualizar);
router.get("/consultar", consultar);


module.exports = router;
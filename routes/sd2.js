const express = require("express");
const router = express.Router();
const {atualizar, consultar} = require("../controllers/sd2.js");

router.get("/atualizar", atualizar);
router.get("/consultar", consultar);


module.exports = router;
const express = require("express");
const router = express.Router();
const {atualizar, consultar} = require("../controllers/sc6.js");
const isAuth = require("../middleware/isAuth.js");

router.get("/atualizar", isAuth.isAuth, atualizar);
router.get("/consultar", isAuth.isAuth, consultar);


module.exports = router;
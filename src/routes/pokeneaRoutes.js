const express = require("express")
const router = express.Router()
const PokeneaController = require("../controllers/pokeneaController")

router.get("/pokenea/basic-info", (req, res) =>
  PokeneaController.getBasicInfo(req, res),
)

router.get("/pokenea/insight", (req, res) =>
  PokeneaController.getInsight(req, res),
)

module.exports = router

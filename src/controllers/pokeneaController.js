const PokeneaUtil = require("../utils/pokeneaUtil")
const PokeneaPresenter = require("../presenters/pokeneaPresenter")

class PokeneaController {
  getBasicInfo(req, res) {
    pokeneas = PokeneaUtil.loadPokeneas()
    const randomPokenea =
      this.pokeneas[Math.floor(Math.random() * pokeneas.length)]
    res.json(PokeneaPresenter.basicInfo(randomPokenea))
  }
  getInsight(req, res) {
    pokeneas = PokeneaUtil.loadPokeneas()
    const randomPokenea =
      this.pokeneas[Math.floor(Math.random() * pokeneas.length)]
    res.json(PokeneaPresenter.insightInfo(randomPokenea))
  }
}

module.exports = new PokeneaController()

const os = require("os")

class PokeneaPresenter {
  static basicInfo(pokenea) {
    return {
      id: pokenea.id,
      name: pokenea.name,
      height: pokenea.height,
      skill: pokenea.skill,
      containerId: os.hostname(),
    }
  }
  static insightInfo(pokenea) {
    return {
      image: pokenea.image,
      phrase: pokenea.phrase,
      containerId: os.hostname(),
    }
  }
}

module.exports = PokeneaPresenter

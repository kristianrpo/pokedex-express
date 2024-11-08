const PokeneaUtil = require('../utils/pokeneaUtil');
const PokeneaPresenter = require('../presenters/pokeneaPresenter');

class PokeneaController{
    constructor() {
        this.pokeneas = PokeneaUtil.loadPokeneas();
    }
    getBasicInfo(req, res){
        const randomPokenea = this.pokeneas[Math.floor(Math.random() * this.pokeneas.length)];
        res.json(PokeneaPresenter.basicInfo(randomPokenea));
    }
    getInsight(req,res){
        const randomPokenea = this.pokeneas[Math.floor(Math.random() * this.pokeneas.length)];
        res.json(PokeneaPresenter.insightInfo(randomPokenea)); 
    }
}

module.exports = new PokeneaController();
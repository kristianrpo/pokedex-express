const PokeneaUtil = require('../utils/pokeneaUtil');
const PokeneaPresenter = require('../presenters/pokeneaPresenter');

class PokeneaController{
    constructor() {
        this.pokeneas = PokeneaUtil.loadPokeneas();
    }
    detail(req, res){
        const randomPokenea = this.pokeneas[Math.floor(Math.random() * this.pokeneas.length)];
        res.json(PokeneaPresenter.basicInfo(randomPokenea));
    }
    insight(req,res){
        const randomPokenea = this.pokeneas[Math.floor(Math.random() * this.pokeneas.length)];
        res.json(PokeneaPresenter.insightInfo(randomPokenea)); 
    }
}

module.exports = new PokeneaController();
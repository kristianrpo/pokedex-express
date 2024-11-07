const fs = require('fs');
const path = require('path');

class PokeneaUtil {
    loadPokeneas() {
        const filePath = path.join(__dirname, '..', 'data', 'pokeneas.json');
        const pokeneas = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(pokeneas);
    }
}

module.exports = new PokeneaUtil();

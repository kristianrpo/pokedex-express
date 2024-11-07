const express = require('express');
const router = express.Router();
const PokeneaController = require('../controllers/pokeneaController');

router.get('/detail', (req, res) => PokeneaController.detail(req, res));

router.get('/insight', (req, res) => PokeneaController.insight(req, res));

module.exports = router;
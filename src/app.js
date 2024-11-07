const express = require('express');
const app = express();

const pokeneaRoutes = require('./routes/pokeneaRoutes');

app.use('/api/pokeneas', pokeneaRoutes);

module.exports = app;

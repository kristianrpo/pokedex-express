const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());

const pokeneaRoutes = require("./routes/pokeneaRoutes");

app.use("/api/v1", pokeneaRoutes);

module.exports = app;

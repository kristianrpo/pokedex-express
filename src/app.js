const express = require("express")
const app = express()

const pokeneaRoutes = require("./routes/pokeneaRoutes")

app.use("/api/v1", pokeneaRoutes)

module.exports = app

require("dotenv").config()
const connectBD = require("./config/db")
const express = require("express")
const contatosRoute = require("./routes/contatosRoutes")


connectBD()

const app = express()

app.use("/contatos", contatosRoute)

app.listen(process.env.PORT, ()=>console.log(`conectado na porta ${process.env.PORT}`))
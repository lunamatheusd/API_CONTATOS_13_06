const Router = require("express").Router

const contatosFunctions = require("../controllers/contatosController")

const contatosRoute = Router()

contatosRoute.get("/", async (req,res)=>{
    const allContatos = await contatosFunctions.getAllContatosController()

    return res.send(allContatos)
})

contatosRoute.post("/create", async (req,res)=>{
    await contatosFunctions.createContatoController(req.body)

    return {msg: "Sucesso ao criar contato"}
})

module.exports = contatosRoute
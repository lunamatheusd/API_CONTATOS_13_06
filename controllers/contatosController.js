const contatosModel = require("../models/contatosModel")


const getAllContatosController = async () => await contatosModel.find()

const createContatoController = async (nome,telefone,email) => await contatosModel.create({nome, telefone, email})


module.exports = {getAllContatosController, createContatoController}
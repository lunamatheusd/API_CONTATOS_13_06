const mongoose = require("mongoose")

const conectarBD = () =>{
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Conectado com sucesso")).catch((err)=>{exit(); console.log(err.toString())})
}

module.exports = conectarBD
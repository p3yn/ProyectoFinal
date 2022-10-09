const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect (process.env.MONGO_DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log('DB IS CONNECTED'))
    .catch(error => console.log(error));
//MODULO EXPORTADO, USANDO VARIABLES DE ENTORNO
// MONGO_DB_URI =(mongodb+srv://IvanCESUN7mo:raFCuHRZZwHOm0sE@cluster0.chtmmou.mongodb.net/proyecto_fina?retryWrites=true&w=majority )
// SE USÓ VARIABLE DE ENTORNO PARA OCULTAR USUARIO Y CONTRASEÑA
module.exports = mongoose;
//productos
//total
//sucursal
//user
//metodo de pago


//CRUD
//Listado, detalle

var mongoose = require('mongoose');

var saleSchema = new mongoose.Schema({
    producto: { type: String, lowercase: true, index: true },
    total: Number,
    sucursal: String,
    user: String,
    metodoDePago: String
}, { timestamps: true });

mongoose.model('ventas', saleSchema);

module.exports = Sales = mongoose.model('ventas', saleSchema);
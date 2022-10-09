//productos
//total
//sucursal
//user
//metodo de pago


//CRUD
//Listado, detalle

var mongoose = require('mongoose');

var saleSchema = new mongoose.Schema({
    producto: {String, lowercase: true, index: true},
    total: Number,
    sucursal: String,
    user: String,
    metodoDePago: String    
},{ timestamps: true });

mongoose.model('Product', productSchema);

module.exports = productos = mongoose.model('Product', productSchema);
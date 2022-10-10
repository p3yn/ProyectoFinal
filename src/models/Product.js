const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: { type: String, lowecase: true },
    sku: { type: String, uppercase: true },
    precio: Number,
    stock: Number,
    sucursal: String,
    status: String,
}, {
    timestamps: true,
    versionKey: false
});

mongoose.model('productos', productSchema);

module.exports = Productos = mongoose.model('productos', productSchema);
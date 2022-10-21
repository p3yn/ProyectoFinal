var mongoose = require('mongoose');

var branchSchema = new mongoose.Schema({
    status: String,
    nombre: String,
    codigo: String,
    telefono: String,
    direccion: String,
    ubicacion: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
        type: [Number],
        required: true
        }
    }
});

mongoose.model('sucursales', branchSchema);

module.exports = Branches = mongoose.model('sucursales', branchSchema);
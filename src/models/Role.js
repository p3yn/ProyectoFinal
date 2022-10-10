//const { object } = require('joi');
var mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    nombreRol: { type: String, lowercase: true},
    codigoRol: String,    
}, {
    timestamps: true,
    versionKey: false
});

mongoose.model('roles', roleSchema);

module.exports = Roles = mongoose.model('roles', roleSchema);
const { object } = require('joi');
var mongoose = require('mongoose');

var roleSchema = new mongoose.Schema({
    nombreRol: { String, lowercase: true, index: true },
    codigoRol: Number,
    _id: mongoose.Types.ObjectId,
}, {
    timestamps: true
});

mongoose.model('Role', roleSchema);

module.exports = roles = mongoose.model('Role', roleSchema);
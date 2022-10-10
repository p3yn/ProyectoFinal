var mongoose = require('mongoose');


var payMethodSchema = new mongoose.Schema({
    nombre: String,
    codigo: Number,
});

mongoose.model('metodosDePago', payMethodSchema);

module.exports = PayMethod = mongoose.model('metodosDePago', payMethodSchema);
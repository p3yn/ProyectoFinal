var mongoose = require('mongoose');


var payMethodSchema = new mongoose.Schema({
    nombre: String,
    codigo: Number,
});

mongoose.model('PayMethod', payMethodSchema);

module.exports = metodosDePago = mongoose.model('PayMethod', payMethodSchema);
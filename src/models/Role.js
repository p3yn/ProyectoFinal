
var mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: { type: String, lowercase: true},
    code: String,    
}, {
    timestamps: true,
    versionKey: false
});



mongoose.model('roles', roleSchema);

module.exports = roles = mongoose.model('roles', roleSchema)

module.exports.ROLES = ['user','moderator','admin'];
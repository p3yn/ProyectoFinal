//const { roleSchema } = require('./roles.js');

var mongoose = require('mongoose');
var crypto = require('crypto');

var UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, lowercase: true, index: true },
    password: String,
    salt: String,
    //rol: {roleSchema},
}, { timestamps: true },{versionKey: false});

mongoose.model('users', UserSchema);

module.exports = Users = mongoose.model('users', UserSchema);
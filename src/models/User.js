var mongoose = require('mongoose');
const Roles = require('./Role');


var UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, lowercase: true, index: true },
    password: { type: String, require: true },
    salt: String,
    roles: [{
        ref: "Roles",
        type: mongoose.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

mongoose.model('users', UserSchema);

module.exports = Users = mongoose.model('users', UserSchema);
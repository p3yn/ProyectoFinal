var mongoose = require('mongoose');
const Roles = require('./Role');
var bcrypt = require('bcrypt')


var UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true, lowercase: true, index: true },
    password: { type: String, require: true },
    roles: [{
        ref: "Roles",
        type: mongoose.Types.ObjectId
    }]
}, {
    timestamps: true,
    versionKey: false
});

UserSchema.statics.encryptPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};


UserSchema.statics.comparePass = async (password, receivedPass) => {
    return await bcrypt.compare(password, receivedPass);
}

mongoose.model('users', UserSchema);

module.exports = Users = mongoose.model('users', UserSchema);
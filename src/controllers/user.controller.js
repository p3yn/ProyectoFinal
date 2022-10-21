
const userCtrl = {}

const json = require('body-parser');
const User = require('../models/User');
const authCtrl = require('../controllers/auth.controller');

const createUser = authCtrl.signUp

const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body,{
        new:true
    })
    res.status(200).json(updatedUser)
}; 

const deleteUsersById = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.userId)
    res.status(200).json()
};

module.exports = {createUser, updateUserById, deleteUsersById}

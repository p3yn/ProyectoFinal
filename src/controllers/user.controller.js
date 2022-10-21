
const userCtrl = {}

//const express = require('express')
const json = require('body-parser');
const User = require('../models/User');
//const Role = require('../models/Role');
//const router = express.Router()
const authCtrl = require('../controllers/auth.controller');
//const authRoutes = require('../routes/auth.routes')
//const { config } = require('dotenv');
//const { Model } = require('mongoose');
//const jwt = require('jsonwebtoken');

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

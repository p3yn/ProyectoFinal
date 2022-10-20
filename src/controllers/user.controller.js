
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

module.exports = {createUser}
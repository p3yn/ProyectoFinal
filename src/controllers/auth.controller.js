//const mongoose = require('mongoose')
const User = require('../models/User')
//const authRoutes = require('../routes/auth.routes')
const express =require('express')


const signUp = (req, res) => {
    res.json('creáte una cuenta ché')
}

const signIn= (req, res) => {
    res.json('logueate loco');
}

module.exports = {signUp, signIn}

//const mongoose = require('mongoose')
const User = require('../models/User')
//const authRoutes = require('../routes/auth.routes')
const express = require('express')
const jwt = require('jsonwebtoken')


const signUp = async (req, res) => {
    const { name, email, password, roles } = req.body;
    //const userFound = User.find({email})
    const newUser = new User({
        name,
        email,
        password: await User.encryptPass(password)
    })
    const savedUser = await newUser.save();
    const token = jwt.sign({id:savedUser._id}, process.env.SECRET, {
        expiresIn: 604800 //expira en 7 dias, está en segundos
    })
    res.status(200).json({token})
    //res.json('signup')
};

const signIn = (req, res) => {
    res.json('logueate loco');
};

module.exports = { signUp, signIn }

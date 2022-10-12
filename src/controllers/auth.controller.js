//const mongoose = require('mongoose')
const User = require('../models/User')
const Rol = require('../models/Role')
const authRoutes = require('../routes/auth.routes')
const express = require('express')
const jwt = require('jsonwebtoken');
//const Role = require('../models/Role');


const signUp = async (req, res) => {
    const { name, email, password, roles } = req.body;
    //const userFound = User.find({email})
    const newUser = new User({
        name,
        email,
        password: await User.encryptPass(password)
    })

    if (roles){
        const foundRoles = await Rol.find({name:{$in: roles}})
        newUser.roles = foundRoles.map(roles => roles.code)
    } else {
        const roles = await Rol.findOne({name: 'user'})
        newUser.roles = roles.code
    }

    const savedUser = await newUser.save();

    const token = jwt.sign({id:savedUser._id}, process.env.SECRET, {
        expiresIn: 604800 //expira en 7 dias, está en segundos
    })
    res.status(200).json({token})//nos regresa un token como respuesta    
};

const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email})
    if(!userFound) return res.status(400).json ({message:'User not found'})

    console.log(userFound)
    res.json({token: ''})
};

module.exports = { signUp, signIn }

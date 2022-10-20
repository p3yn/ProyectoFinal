const mongoose = require('mongoose')
const User = require('../models/User')
const authRoutes = require('../routes/auth.routes')
//const express = require('express')
const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
const { Model } = require('mongoose');
const Role = require('../models/Role');



const signUp = async (req, res) => {
    try {
        const { name, email, password, roles } = req.body
        const newUser = new User({
            name,
            email,
            password: await User.encryptPass(password)
        })

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(roles => roles._id)
        } else {
            const roles = await Role.findOne({ name: 'user' })
            newUser.roles = [roles._id]
        }
        const userFound = await User.findOne({ email: req.body.email })
        if (userFound) return res.status(401).json({ message: 'email already in use' })

        const savedUser = await newUser.save();

        const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
            expiresIn: 86400 //expira en 1 dia, está en segundos
        })
        res.status(200).json({ token })//nos regresa un token en formao json como respuesta   
    } catch (err) {
        console.log
    }
};

const signIn = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email }).populate("roles");
    if (!userFound) return res.status(400).json({ message: 'User not found' })

    const matchPassword = await User.comparePass(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({ token: null, message: 'Invalid Password' })

    const token = jwt.sign({ id: userFound._id }, process.env.SECRET, {
        expiresIn: 86400 // 24 horas, está en segundos
    })
    console.log(userFound)
    res.json({ token })
};

module.exports = { signUp, signIn }

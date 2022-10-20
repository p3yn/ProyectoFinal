const jwt = require('jsonwebtoken')
const config = require('dotenv')
const User = require('../models/User')
const { json } = require('body-parser')
const Role = require('../models/Role')
const { default: mongoose } = require('mongoose')

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];

        if (!token) return res.status(403).json({ message: 'Access denied, no token provided' })

        const decoded = jwt.verify(token, process.env.SECRET);
        req.UserID = decoded.id;

        const user = await User.findById(req.UserID, { password: 0 })
        if (!user) return res.status(404).json({ message: 'user not found' })
        next()
    } catch (err) {
        return res.status(401).json({ message: 'UNATHORIZED, CEASE AND DESIST; OR ELSE!' })
    }
};


const isModerator = async (req, res, next) => {
    const user = await User.findById(req.UserID)
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'moderator') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'action not allowed; requires MODERATOR privileges' })
}




const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.UserID)
    const roles = await Role.find({ _id: { $in: user.roles } })

    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
            next()
            return;
        }
    }
    return res.status(403).json({ message: 'action not allowed; requires ADMIN privileges' })
}


module.exports = verifyOps = { verifyToken, isModerator, isAdmin }
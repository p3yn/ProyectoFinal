const express = require('express')
const router = express.Router()
const salesCtrl = require ('../controllers/sales.controller')
const verifyOps = require('../middlewares/authJwt')

//RUTAS PARA VENTAS
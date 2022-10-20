const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controller')
const verifyOps = require('../middlewares/authJwt')
const roleExists = require('../middlewares/verifySignup')
const authCtrl = require('../controllers/auth.controller')

//RUTAS PARA USUARIOS
router.post('/',[verifyOps.verifyToken, verifyOps.isAdmin, roleExists], userCtrl.createUser); //authCtrl.signUp//cualquiera puede obtener, no necesita permisos especiales
// router.put('/update/:userId', [verifyOps.verifyToken, verifyOps.isAdmin], userCtrl.updateUsersById); //ocupa token
// router.delete('/delete/:userId', [verifyOps.verifyToken, verifyOps.isAdmin], productsCtrl.deleteUserseById);//ocupa token

module.exports = router;
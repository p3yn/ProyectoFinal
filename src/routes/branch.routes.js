const express = require('express')
const router = express.Router()
const branchCtrl = require ('../controllers/branch.controller')
const verifyOps = require('../middlewares/authJwt')


//RUTAS PARA SUCURSALES
router.get('/', branchCtrl.getBranches); //cualquiera puede obtener, no necesita permisos especiales
router.post('/add/', [verifyOps.verifyToken, verifyOps.isModerator], branchCtrl.createBranch); //ocupa token
router.get('/search/:branchId', branchCtrl.getBranchesById);// cualquiera puede buscar  sucursales por ID
router.put('/update/:branchId', [verifyOps.verifyToken, verifyOps.isAdmin], branchCtrl.updateBranchById); //ocupa token
router.delete('/delete/:branchId', [verifyOps.verifyToken, verifyOps.isAdmin], branchCtrl.deleteBranchById);//ocupa token

module.exports = router;
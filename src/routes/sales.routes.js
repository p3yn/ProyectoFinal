const express = require('express')
const router = express.Router()
const salesCtrl = require ('../controllers/sales.controller')
const verifyOps = require('../middlewares/authJwt')

//RUTAS PARA VENTAS

router.post('/add/', [verifyOps.verifyToken, verifyOps.isModerator], salesCtrl.createSales); //ocupa token
router.get('/search/:salesId', salesCtrl.getSaleById);// cualquiera puede buscar  procutos por ID
router.put('/update/:salesId', [verifyOps.verifyToken, verifyOps.isAdmin], salesCtrl.updateSaleById); //ocupa token
router.delete('/delete/:salesId', [verifyOps.verifyToken, verifyOps.isAdmin], salesCtrl.deleteSaleById);//ocupa token

module.exports = router;
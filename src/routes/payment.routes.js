const express = require('express')
const router = express.Router()
const paymentCtrl = require ('../controllers/payment.controller')
const verifyOps = require('../middlewares/authJwt')

//RUTAS PARA PAGOS

router.post('/add/', [verifyOps.verifyToken, verifyOps.isModerator], paymentCtrl.createPayment); //ocupa token
router.get('/search/:paymentId', paymentCtrl.getPaymentById);// cualquiera puede buscar  procutos por ID
router.put('/update/:paymentId', [verifyOps.verifyToken, verifyOps.isAdmin], paymentCtrl.updatePaymentById); //ocupa token
router.delete('/delete/:paymentId', [verifyOps.verifyToken, verifyOps.isAdmin], paymentCtrl.deletePaymentById);//ocupa token

module.exports = router;
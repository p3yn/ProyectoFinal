const express = require('express')
const router = express.Router()
const productsCtrl = require ('../controllers/products.controller')
const verifyOps = require('../middlewares/authJwt')

//RUTAS PARA PRODUCTOS
router.get('/', productsCtrl.getProducts); //cualquiera puede obtener, no necesita permisos especiales
router.post('/add/', [verifyOps.verifyToken, verifyOps.isModerator], productsCtrl.createProduct); //ocupa token
router.get('/search/:productId', productsCtrl.getProductsById);// cualquiera puede buscar  procutos por ID
router.put('/update/:productId', [verifyOps.verifyToken, verifyOps.isAdmin], productsCtrl.updateProductsById); //ocupa token
router.delete('/delete/:productId', [verifyOps.verifyToken, verifyOps.isAdmin], productsCtrl.deleteProductsById);//ocupa token

module.exports = router;
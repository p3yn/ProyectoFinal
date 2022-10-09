const express = require('express')
const router = express.Router()
const productsCtrl = require ('../controllers/products.controller')

router.get('/', productsCtrl.getProducts);
router.post('/', productsCtrl.createProduct);
router.get('/:productId', productsCtrl.deleteProductsById);
router.put('/:productId', productsCtrl.updateProductsById);
router.delete('/:productId', productsCtrl.deleteProductsById);



module.exports = router;
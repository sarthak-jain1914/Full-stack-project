const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/product', productController.createProduct);
router.get('/products', productController.getProducts);
router.delete('/product/:id', productController.deleteProduct);
router.put('/product', productController.updateProduct);

module.exports = router;
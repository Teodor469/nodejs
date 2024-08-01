const express = require('express');
const router = express.Router();
const productController = require('../Controllers/Products');

router.get('/', (req, res) => {
    res.send('Hello Node API');
});

router.get('/product', productController.getAllProducts);

router.get('/product/:id', productController.getProductById);

router.post('/product', productController.createProduct);

router.put('/products/:id', productController.updateProduct);

router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
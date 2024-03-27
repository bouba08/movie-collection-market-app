const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware'); // Assuming you have authentication middleware

// Routes for products
router.post('/products', authMiddleware, productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.delete('/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;

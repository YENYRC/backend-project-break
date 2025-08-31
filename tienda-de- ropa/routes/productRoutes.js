const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');


router.get('/', productController.showProducts);
router.get('/new', productController.showNewProduct);


router.get('/dashboard', authMiddleware, productController.showDashboard); 
router.post('/dashboard', authMiddleware, productController.createProduct);
router.get('/dashboard/:id', authMiddleware, productController.showProductById);
router.get('/dashboard/:id/edit', authMiddleware, productController.showEditProduct);
router.put('/dashboard/:id', authMiddleware, productController.updateProduct);
router.delete('/dashboard/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
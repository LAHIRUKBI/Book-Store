import express from 'express';        // Import Express framework
import { addProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/product.controller.js';

const router = express.Router();       // Create a new router instance

router.post('/', addProduct);          // Route to add a new product
router.get('/', getProducts);          // Route to get all products
router.put('/:id', updateProduct);     // Route to update a product by ID
router.delete('/:id', deleteProduct);  // Route to delete a product by ID
router.get('/:id', getProductById);    // Route to get a product by ID


export default router;                 // Export router to use in other parts of the app

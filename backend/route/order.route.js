import express from 'express';
import { createOrder, getOrders } from '../controller/order.controller.js';

const router = express.Router();

// Route to create a new order
router.post('/create', createOrder);

// Route to fetch all orders
router.get('/list', getOrders);

export default router;

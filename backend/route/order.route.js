import express from 'express';
import { createOrder, getOrders } from '../controller/order.controller.js';

const router = express.Router();

router.post('/create', createOrder);
router.get('/list', getOrders);

export default router;

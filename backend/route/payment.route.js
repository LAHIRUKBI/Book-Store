import express from 'express';
import { createPayment, getAllPayments, getOrdersForEmail, getPaymentsByEmail } from '../controller/payment.controller.js';

const router = express.Router();

router.post('/', createPayment);
router.get('/', getAllPayments);
router.get('/:email', getOrdersForEmail);
router.get('/payments/:email', getPaymentsByEmail);


export default router;

import express from 'express';
import { createPayment, getAllPayments, getOrdersForEmail, getPaymentsForEmail } from '../controller/payment.controller.js';

const router = express.Router();

router.post('/', createPayment);
router.get('/', getAllPayments);
router.get('/:email', getOrdersForEmail);
router.get('/payments/:email', getPaymentsForEmail);

export default router;

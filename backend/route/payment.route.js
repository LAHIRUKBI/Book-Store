import express from 'express';
import { createPayment, getAllPayments } from '../controller/payment.controller.js';

const router = express.Router();

router.post('/', createPayment);
router.get('/', getAllPayments);

export default router;

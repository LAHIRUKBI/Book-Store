import express from 'express';
import { createPayment } from '../controller/payment.controller.js';

const router = express.Router();

router.post('/', createPayment);

export default router;

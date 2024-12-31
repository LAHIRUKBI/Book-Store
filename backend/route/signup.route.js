// signup.route.js
import express from 'express';
import { getEmployeeDetailsByEmail, signin, signup } from '../controller/signup.controller.js';

const router = express.Router();

router.post("/", signup);
router.post("/signin", signin);
router.get('/profile/:email', getEmployeeDetailsByEmail); 

export default router;

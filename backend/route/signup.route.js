// signup.route.js
import express from 'express';
import { signin, signup } from '../controller/signup.controller.js'; // Updated path

const router = express.Router();

router.post("/", signup);
router.post("/signin", signin);

export default router;

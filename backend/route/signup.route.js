// signup.route.js
import express from 'express';
import { getEmployeeDetails, signin, signup } from '../controller/signup.controller.js'; // Updated path

const router = express.Router();

router.post("/", signup);
router.post("/signin", signin);
router.get('/:username', getEmployeeDetails);

export default router;

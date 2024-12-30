import express from 'express';
import { companyLogin, deleteEmployee, getAllEmployees, registerEmployee } from '../controller/employee.controller.js';

const router = express.Router();

// POST: Register Employee
router.post('/register', registerEmployee);
router.get('/', getAllEmployees);
router.delete('/:id', deleteEmployee);
router.post('/login', companyLogin);

export default router;

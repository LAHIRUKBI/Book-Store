import express from 'express';
import { companyLogin, deleteEmployee, getAllEmployees, getAllUsers, registerEmployee } from '../controller/employee.controller.js';

const router = express.Router();

// POST: Register Employee
router.post('/register', registerEmployee);
router.get('/', getAllEmployees);
router.delete('/:id', deleteEmployee);
router.post('/login', companyLogin);

// Route to get all users
router.get('/users', getAllUsers);

export default router;

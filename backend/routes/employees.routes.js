const express = require('express');
const router = express.Router();

const employees = require('../controllers/employees.controller');

router.get('/api/employees', employees.getEmployees);
router.post('/api/employees', employees.createEmployees);
router.get('/api/employees/:id', employees.getEmployee);
router.put('/api/employees/:id', employees.updateEmployees);
router.delete('/api/employees/:id', employees.deleteEmployees);

module.exports = router;
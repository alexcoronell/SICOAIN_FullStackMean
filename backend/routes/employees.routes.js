const express = require('express');
const router = express.Router();

const employees = require('../controllers/employees.controller');

router.get('/', employees.getEmployees);
router.post('/', employees.createEmployees);
router.get('/:id', employees.getEmployee);
router.put('/:id', employees.updateEmployees);
router.delete('/:id', employees.deleteEmployees);

module.exports = router;
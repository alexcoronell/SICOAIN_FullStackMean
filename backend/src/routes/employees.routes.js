const express = require('express');
const router = express.Router();

const employees = require('../controllers/employees.controller');

router.get('/getEmployees', employees.getEmployees);
router.post('/getEmployee', employees.getEmployee);
router.post('/create', employees.createEmployees);
router.post('/update', employees.updateEmployees);
router.post('/actDesact', employees.actDesact);

module.exports = router;
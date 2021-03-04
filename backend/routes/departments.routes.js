const express = require('express');
const router = express.Router();

const departments = require('../controllers/departments.controller');

router.get('/api/departments', departments.getDepartments);
router.get('/api/departments/:id', departments.getDepartment);

module.exports = router;
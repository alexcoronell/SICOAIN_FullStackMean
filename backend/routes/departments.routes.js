const express = require('express');
const router = express.Router();

const departments = require('../controllers/departments.controller');

router.get('/', departments.getDepartments);
router.get('/:id', departments.getDepartment);

module.exports = router;
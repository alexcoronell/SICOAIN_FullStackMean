const express = require('express');
const router = express.Router();

const departments = require('../controllers/departments.controller');

router.get('/', departments.getDepartments);

module.exports = router;
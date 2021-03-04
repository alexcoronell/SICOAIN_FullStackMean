const express = require('express');
const router = express.Router();

const companies = require('../controllers/companies.controller');

router.get('/api/companies', companies.getcompanies);
router.post('/api/companies', companies.createcompanies);
router.get('/api/companies/:id', companies.getCompany);
router.put('/api/companies/:id', companies.updatecompanies);
router.delete('/api/companies/:id', companies.deleteUser);

module.exports = router;
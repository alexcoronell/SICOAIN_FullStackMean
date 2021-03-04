const express = require('express');
const router = express.Router();

const companies = require('../controllers/companies.controller');

router.get('/api/companies', companies.getCompanies);
router.post('/api/companies', companies.createCompanies);
router.get('/api/companies/:id', companies.getCompany);
router.put('/api/companies/:id', companies.updateCompanies);
router.delete('/api/companies/:id', companies.deleteCompanies);

module.exports = router;
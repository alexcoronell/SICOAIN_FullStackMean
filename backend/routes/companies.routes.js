const express = require('express');
const router = express.Router();

const companies = require('../controllers/companies.controller');

router.get('/', companies.getCompanies);
router.post('/', companies.createCompanies);
router.get('/:id', companies.getCompany);
router.put('/:id', companies.updateCompanies);
router.delete('/:id', companies.deleteCompanies);

module.exports = router;
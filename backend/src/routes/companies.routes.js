const express = require('express');
const router = express.Router();

const companies = require('../controllers/companies.controller');

router.post('/getCompany', companies.getCompany);
router.get('/getCompanies', companies.getCompanies);
router.get('/getActiveCompanies', companies.getActiveCompanies);
router.post('/create', companies.createCompanies);
router.post('/update', companies.updateCompanies);
router.post('/actDesact', companies.actDesact);

module.exports = router;

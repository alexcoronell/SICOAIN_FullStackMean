const express = require('express');
const router = express.Router();

const municipalities = require('../controllers/municipalities.controller');

router.get('/api/municipalities', municipalities.getMunicipalities);
router.get('/api/municipalities/:id', municipalities.getMunicipality);

module.exports = router;
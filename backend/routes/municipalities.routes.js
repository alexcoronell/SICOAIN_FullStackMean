const express = require('express');
const router = express.Router();

const municipalities = require('../controllers/municipalities.controller');

router.get('/', municipalities.getMunicipalities);


module.exports = router;
const express = require('express');
const router = express.Router();

const epss = require('../controllers/epss.controller');

router.post('/getEps', epss.getEpss);
router.post('/getEpss', epss.getEps);
router.post('/create', epss.createEpss);
router.post('/update', epss.updateEpss);
router.post('/actDesact', epss.actDesact);

module.exports = router;
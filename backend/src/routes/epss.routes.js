const express = require('express');
const router = express.Router();

const epss = require('../controllers/epss.controller');

router.post('/getEps', epss.getEps);
router.get('/getEpss', epss.getEpss);
router.get('/getActiveEpss', epss.getActiveEpss);
router.post('/create', epss.createEpss);
router.post('/update', epss.updateEpss);
router.post('/actDesact', epss.actDesact);

module.exports = router;

const express = require('express');
const router = express.Router();

const epss = require('../controllers/epss.controller');

router.get('/api/epss', epss.getEpss);
router.post('/api/epss', epss.createEpss);
router.get('/api/epss/:id', epss.getEps);
router.put('/api/epss/:id', epss.updateEpss);
router.delete('/api/epss/:id', epss.deleteEpss);

module.exports = router;
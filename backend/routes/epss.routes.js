const express = require('express');
const router = express.Router();

const epss = require('../controllers/epss.controller');

router.get('/', epss.getEpss);
router.post('/', epss.createEpss);
router.get('/:id', epss.getEps);
router.put('/:id', epss.updateEpss);
router.delete('/:id', epss.deleteEpss);

module.exports = router;
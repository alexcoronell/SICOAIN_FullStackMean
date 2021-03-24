const express = require('express');
const router = express.Router();

const arls = require('../controllers/arls.controller');

router.post('/getArl', arls.getArl);
router.get('/getArls', arls.getArls);
router.post('/create', arls.createArls);
router.post('/update', arls.updateArls);
router.post('/actDesact', arls.actDesact);

module.exports = router;
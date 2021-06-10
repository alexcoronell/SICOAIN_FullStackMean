const express = require('express');
const router = express.Router();

const positions = require('../controllers/positions.controller');

router.post('/getPosition', positions.getPosition);
router.get('/getPositions', positions.getPositions);
router.get('/getActivePositions', positions.getActivePositions);
router.post('/create', positions.createPositions);
router.post('/update', positions.updatePositions);
router.post('/actDesact', positions.actDesact);

module.exports = router;

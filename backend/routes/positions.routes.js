const express = require('express');
const router = express.Router();

const positions = require('../controllers/positions.controller');

router.get('/api/positions', positions.getPositions);
router.post('/api/positions', positions.createPositions);
router.get('/api/positions/:id', positions.getPosition);
router.put('/api/positions/:id', positions.updatePositions);
router.delete('/api/positions/:id', positions.deletePositions);

module.exports = router;
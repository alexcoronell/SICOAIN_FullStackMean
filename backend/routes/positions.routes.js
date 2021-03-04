const express = require('express');
const router = express.Router();

const positions = require('../controllers/positions.controller');

router.get('/', positions.getPositions);
router.post('/', positions.createPositions);
router.get('/:id', positions.getPosition);
router.put('/:id', positions.updatePositions);
router.delete('/:id', positions.deletePositions);

module.exports = router;
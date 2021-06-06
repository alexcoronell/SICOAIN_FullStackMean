const express = require('express');
const router = express.Router();

const recordCounter = require('../controllers/recordCounter.controller');

router.get('/', recordCounter.getRecordCounter);
router.post('/update', recordCounter.updateRecordCounter);

module.exports = router;
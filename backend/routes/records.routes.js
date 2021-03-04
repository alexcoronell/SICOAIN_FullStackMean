const express = require('express');
const router = express.Router();

const records = require('../controllers/records.controller');

router.get('/api/records', records.getRecords);
router.post('/api/records', records.createRecords);
router.get('/api/records/:id', records.getRecord);
router.put('/api/records/:id', records.updateRecords);
router.delete('/api/records/:id', records.deleteRecords);

module.exports = router;
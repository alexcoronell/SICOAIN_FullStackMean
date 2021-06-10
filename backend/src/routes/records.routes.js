const express = require('express');
const router = express.Router();

const records = require('../controllers/records.controller');

router.get('/getRecords', records.getRecords);
router.get('/getActiveRecords', records.getActiveRecords);
router.get('/getRecordNumber', records.getRecordNumber);
router.post('/createRecords', records.createRecords);
router.post('/getRecord', records.getRecord);
router.post('/update', records.updateRecords);
router.post('/cancel', records.cancelRecords);

module.exports = router;

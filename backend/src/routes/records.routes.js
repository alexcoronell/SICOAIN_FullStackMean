const express = require('express');
const router = express.Router();

const records = require('../controllers/records.controller');

router.get('/getRecords', records.getRecords);
router.get('/getRecordNumber', records.getRecordNumber);
router.post('/createRecords', records.createRecords);
router.get('/:id', records.getRecord);
router.post('/:id', records.updateRecords);
router.post('/:id', records.cancelRecords);

module.exports = router;

const express = require('express');
const router = express.Router();

const records = require('../controllers/records.controller');

router.get('/', records.getRecords);
router.post('/', records.createRecords);
router.get('/:id', records.getRecord);
router.put('/:id', records.updateRecords);
router.delete('/:id', records.deleteRecords);

module.exports = router;
const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');

router.get('/', events.getEvents);
router.post('/', events.createEvents);
router.get('/:id', events.getEvent);
router.put('/:id', events.updateEvents);
router.delete('/:id', events.deleteEvents);

module.exports = router;
const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');

router.post('/getEvent', events.getEvent);
router.post('/getEvents', events.getEvents);
router.post('/create', events.createEvents);
router.post('/update', events.updateEvents);
router.post('/actDesact', events.actDesact);


module.exports = router;
const express = require('express');
const router = express.Router();

const events = require('../controllers/events.controller');

router.post('/getEvent', events.getEvent);
router.get('/getEvents', events.getEvents);
router.get('/getActiveEvents', events.getActiveEvents);
router.post('/create', events.createEvents);
router.post('/update', events.updateEvents);
router.post('/actDesact', events.actDesact);


module.exports = router;

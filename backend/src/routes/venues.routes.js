const express = require('express');
const router = express.Router();

const venues = require('../controllers/venues.controller.');

router.post('/getCampus', venues.getCampus);
router.get('/getVenues', venues.getVenues);
router.post('/create', venues.createVenues);
router.post('/update', venues.updateVenues);
router.post('/actDesact', venues.actDesact);


module.exports = router;
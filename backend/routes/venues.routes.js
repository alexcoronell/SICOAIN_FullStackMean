const express = require('express');
const router = express.Router();

const venues = require('../controllers/venues.controller.');

router.get('/api/venues', venues.getVenues);
router.post('/api/venues', venues.createVenues);
router.get('/api/venues/:id', venues.getCampus);
router.put('/api/venues/:id', venues.updateVenues);
router.delete('/api/venues/:id', venues.deleteVenues);

module.exports = router;
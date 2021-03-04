const express = require('express');
const router = express.Router();

const venues = require('../controllers/venues.controller.');

router.get('/', venues.getVenues);
router.post('/', venues.createVenues);
router.get('/:id', venues.getCampus);
router.put('/:id', venues.updateVenues);
router.delete('/:id', venues.deleteVenues);

module.exports = router;
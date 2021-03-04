const express = require('express');
const router = express.Router();

const arls = require('../controllers/arl.controller');

router.get('/api/arls', arls.getArls);
router.post('/api/arls', arls.createArls);
router.get('/api/arls/:id', arls.getArl);
router.put('/api/arls/:id', arls.updateArls);
router.delete('/api/arls/:id', arls.deleteArls);

module.exports = router;
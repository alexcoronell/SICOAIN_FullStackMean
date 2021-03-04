const express = require('express');
const router = express.Router();

const arls = require('../controllers/arl.controller');

router.get('/api/arls', arls.getarls);
router.post('/api/arls', arls.createarls);
router.get('/api/arls/:id', arls.getUser);
router.put('/api/arls/:id', arls.updatearls);
router.delete('/api/arls/:id', arls.deleteUser);

module.exports = router;
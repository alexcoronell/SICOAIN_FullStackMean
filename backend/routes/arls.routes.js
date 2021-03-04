const express = require('express');
const router = express.Router();

const arls = require('../controllers/arls.controller');

router.get('/', arls.getArls);
router.post('/', arls.createArls);
router.get('/:id', arls.getArl);
router.put('/:id', arls.updateArls);
router.delete('/:id', arls.deleteArls);

module.exports = router;
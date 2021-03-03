const express = require('express');
const router = express.Router();

router.get('/', (reg, res) => {
    res.json({
        status: 'Api Works'
    });
});

module.exports = router;
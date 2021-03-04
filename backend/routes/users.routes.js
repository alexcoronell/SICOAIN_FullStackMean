const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.get('/api/users', users.getUsers);
router.post('/api/users', users.createUsers);
router.get('/api/users/:id', users.getUser);
router.put('/api/users/:id', users.updateUsers);
router.delete('/api/users/:id', users.deleteUser);

module.exports = router;
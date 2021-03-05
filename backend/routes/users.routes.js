const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.get('/', users.getUsers);
router.post('/newUser', users.createUsers);
router.post('/login', users.loginUser);
router.get('/:id', users.getUser);
router.put('/:id', users.updateUsers);
router.delete(':id', users.deleteUser);

module.exports = router;
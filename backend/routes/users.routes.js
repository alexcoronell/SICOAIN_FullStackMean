const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.get('/', users.getUsers);
router.post('/', users.createUsers);
router.get('/:id', users.getUser);
router.put('/:id', users.updateUsers);
router.delete(':id', users.deleteUser);

module.exports = router;
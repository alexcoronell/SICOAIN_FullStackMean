const express = require('express');
const router = express.Router();

const users = require('../controllers/users.controller');

router.get('/getUsers', users.getUsers);
router.get('/getActiveUsers', users.getActiveUsers);
router.post('/newUser', users.createUsers);
router.post('/getUser', users.getUser);
router.post('/login', users.loginUser);
router.post('/dataUser', users.getUser);
router.post('/update', users.updateUsers);
router.post('/passwordUpdate', users.passwordUpdate);
router.post('/actDesact', users.actDesact);
router.delete(':id', users.deleteUser);

module.exports = router;

const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController');

// endpoints
router.post('/create', users.createUser);
router.patch('/update/:id', users.updateUser);

module.exports = router;
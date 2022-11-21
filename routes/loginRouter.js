const express = require('express');
const router = express.Router();
const login = require('../controllers/loginController');

// endpoints
router.post('/', login.loginUser);

module.exports = router;
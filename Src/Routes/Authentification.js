const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { register, login, autorization } = require('../Controllers/UsersController');
router.post('/register', register);
router.post('/login', login);
module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const ctrlUser = require('../controllers/user.controller');
router.post('/register', ctrlUser.register);

module.exports = router;
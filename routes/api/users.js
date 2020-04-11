const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.get('/signup', usersCtrl.signup);
router.get('/login', usersCtrl.login);


module.exports = router;
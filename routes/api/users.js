const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

router.get('/:id', usersCtrl.getLoggedUser)

router.put("/updateProfile/:id", usersCtrl.updateProfile)

module.exports = router;
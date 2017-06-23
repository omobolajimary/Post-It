const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');

router.post('/api/user/signup', user_controller.signup);
router.post('/api/user/signin', user_controller.login);
router.post('/api/user/group', user_controller.createGroup);


module.exports = router;
const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');
// const group_controller = require('../controller/groupController');


router.post('/api/user/signup', user_controller.signup);
// router.post('/api/user/group', user_controller.group);


module.exports = router;
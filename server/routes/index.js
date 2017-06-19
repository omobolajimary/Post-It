const express = require('express');
const router = express.Router();
const user_controller = require('../controller/userController');



router.post('/api/user/signup', user_controller.signup);



module.exports = router;
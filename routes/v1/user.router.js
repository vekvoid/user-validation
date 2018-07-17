const express = require('express');
const UserController = require('../../controllers/userController');

const router = express.Router();

router.post('/validateUsername', UserController.validateUsername);
router.post('/validateUserPassword', UserController.validateUserPassword);

module.exports = router;

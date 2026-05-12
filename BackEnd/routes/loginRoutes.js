const express = require('express');
const loginRouter = express.Router();
const loginController = require('../controllers/loginController');

// Login del usuario
loginRouter.post("/", loginController.postLogin);

module.exports = loginRouter;
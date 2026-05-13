const express = require("express");
const PerfilesRouter = express.Router();
const perfilesController = require('../controllers/perfilesController');

// DEVUELVE LOS DETALLES DE UN PERFIL ESPECÍFICO POR ID
PerfilesRouter.get("/:id", perfilesController.getPerfilById);

module.exports = PerfilesRouter;
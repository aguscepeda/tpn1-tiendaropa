const express = require('express');
const EquipoRouter = express.Router();
const equipoController = require('../controllers/equipoController');

// DEVUELVE TODOS LOS MIEMBROS DEL EQUIPO
EquipoRouter.get('/', equipoController.getEquipo);

module.exports = EquipoRouter;
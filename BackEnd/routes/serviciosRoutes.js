const express = require("express");
const ServiciosRouter = express.Router();
const serviciosController = require('../controllers/serviciosController');

// DEVUELVE TODOS LOS SERVICIOS DISPONIBLES
ServiciosRouter.get("/", serviciosController.getServicios);

// DEVUELVE LOS DETALLES DE UN SERVICIO ESPECÍFICO POR ID
ServiciosRouter.get("/:id", serviciosController.getServicioById);

module.exports = ServiciosRouter;
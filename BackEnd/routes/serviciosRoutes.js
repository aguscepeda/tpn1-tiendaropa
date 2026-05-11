const express = require("express");
const ServiciosRouter = express.Router();

// Rutas para servicios

ServiciosRouter.get("/", (req, res) => {
    res.send("Servicios disponibles");   // modificar, pasar logica a los controladores
});

ServiciosRouter.get("/:id", (req, res) => {   // modificar, pasar logica a los controladores
    const servicioId = req.params.id;
    res.send(`Detalles del servicio con ID: ${servicioId}`);
});

module.exports = ServiciosRouter;
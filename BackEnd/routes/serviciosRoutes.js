const express = require("express");
const ServiciosRouter = express.Router();
const fs = require("fs").promises;
const path = require("path");

// DEVUELVE TODOS LOS SERVICIOS DISPONIBLES
ServiciosRouter.get("/", async (req, res) => {
    try {
    const data = await fs.readFile(
        path.join(__dirname, "../data/servicios.json"),
        "utf-8"
    );

    const serviciosData = JSON.parse(data);

    res.json(serviciosData);
    } catch (error) {
        console.error("Error al obtener los servicios en ServiciosRouter.get('/'): ", error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: "Error al obtener los servicios" });  // status y error que se muestra al cliente si ocurre un error al obtener los servicios
    }   
});

// DEVUELVE LOS DETALLES DE UN SERVICIO ESPECÍFICO POR ID
ServiciosRouter.get("/:id", async (req, res) => {   
    try {
        const servicioId = req.params.id;
        const data = await fs.readFile(
            path.join(__dirname, "../data/servicios.json"),
            "utf-8"
        );
        const serviciosData = JSON.parse(data);
        const servicio = serviciosData.find((s) => s.id === parseInt(servicioId)); // Buscar el servicio por ID en el array de servicios, parseInt para convertir el ID a número
        if (servicio) {                                                            // Si se encuentra el servicio, enviar los detalles del servicio como respuesta en formato JSON
            res.json(servicio);
        } else {                                                                   // Si no se encuentra el servicio, enviar un mensaje de error con código de estado 404
            res.status(404).json({ error: "Servicio no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el servicio en ServiciosRouter.get('/:id'): ", error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: "Error al obtener el servicio especificado" });  // status y error que se muestra al cliente si ocurre un error al obtener el servicio
    }
    }
);

module.exports = ServiciosRouter;
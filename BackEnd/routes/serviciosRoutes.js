const express = require("express");
const ServiciosRouter = express.Router();
const serviciosData = require("../data/servicios.json");  // Importar datos de servicios desde el archivo JSON

// DEVUELVE TODOS LOS SERVICIOS DISPONIBLES
ServiciosRouter.get("/", (req, res) => {
    try {
        res.json(serviciosData);  // Enviar la lista completa de servicios como respuesta en formato JSON
    } catch (error) {
        console.error("Error al obtener los servicios en ServiciosRouter.get('/'): ", error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: "Error al obtener los servicios" });  // status y error que se muestra al cliente si ocurre un error al obtener los servicios
    }   
});

// DEVUELVE LOS DETALLES DE UN SERVICIO ESPECÍFICO POR ID
ServiciosRouter.get("/:id", (req, res) => {   
    try {
        const servicioId = req.params.id;
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
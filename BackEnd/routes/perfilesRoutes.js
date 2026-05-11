const express = require("express");
const PerfilesRouter = express.Router();
const fs = require("fs").promises;
const path = require("path");

// DEVUELVE LOS DETALLES DE UN PERFIL ESPECÍFICO POR ID
PerfilesRouter.get("/:id", async (req, res) => {
    try {
        const perfilId = req.params.id;
        const data = await fs.readFile(
            path.join(__dirname, "../data/perfiles.json"),
            "utf-8"
        );
        const perfilesData = JSON.parse(data);
        const perfil = perfilesData.find((p) => p.id === parseInt(perfilId)); // Buscar el perfil por ID en el array de perfiles, parseInt para convertir el ID a número
        if (perfil) {                                                            // Si se encuentra el perfil, enviar los detalles del perfil como respuesta en formato JSON
            res.json(perfil);
        } else {                                                                   // Si no se encuentra el perfil, enviar un mensaje de error con código de estado 404
            res.status(404).json({ error: "Perfil no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el perfil en PerfilesRouter.get('/:id'): ", error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: "Error al obtener el perfil especificado" });  // status y error que se muestra al cliente si ocurre un error al obtener el perfil
    }
});

module.exports = PerfilesRouter;
const express = require('express');
const EquipoRouter = express.Router();
const fs = require('fs').promises;
const path = require('path');

// DEVUELVE TODOS LOS MIEMBROS DEL EQUIPO
EquipoRouter.get('/', async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(__dirname, "../data/equipo.json"),
            "utf-8"
        );
        const equipoData = JSON.parse(data);
        res.json(equipoData); // Enviar la lista completa del equipo como respuesta en formato JSON
    } catch (error) {
        console.error('Error al obtener el equipo en EquipoRouter.get("/"): ', error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: 'Error al obtener el equipo' }); // status y error que se muestra al cliente si ocurre un error al obtener el equipo
    }   
});

module.exports = EquipoRouter;
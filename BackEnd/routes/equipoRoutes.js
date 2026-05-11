const express = require('express');
const EquipoRouter = express.Router();
const equipoData = require('../data/equipo.json'); // Importar datos del equipo desde el archivo JSON

// DEVUELVE TODOS LOS MIEMBROS DEL EQUIPO
EquipoRouter.get('/', (req, res) => {
    try {
        res.json(equipoData); // Enviar la lista completa del equipo como respuesta en formato JSON
    } catch (error) {
        console.error('Error al obtener el equipo en EquipoRouter.get("/"): ', error); // error en el js, datos que no existen, etc
        res.status(500).json({ error: 'Error al obtener el equipo' }); // status y error que se muestra al cliente si ocurre un error al obtener el equipo
    }   
});

module.exports = EquipoRouter;
const fs = require('fs').promises;
const path = require('path');

const getEquipo = async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(__dirname, "../data/equipo.json"),
            "utf-8"
        );
        const equipoData = JSON.parse(data);
        console.log("Flag: Se ejecutó GET /equipo exitosamente"); 
        res.json(equipoData); 
    } catch (error) {
        console.error('Error al obtener el equipo: ', error); 
        res.status(500).json({ error: 'Error al obtener el equipo' }); 
    }   
};

module.exports = { getEquipo };
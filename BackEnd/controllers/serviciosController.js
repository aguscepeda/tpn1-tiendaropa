const fs = require("fs").promises;
const path = require("path");

const getServicios = async (req, res) => {
    try {
        const data = await fs.readFile(
            path.join(__dirname, "../data/servicios.json"),
            "utf-8"
        );
        const serviciosData = JSON.parse(data);
        console.log("Flag: Se ejecutó GET /servicios exitosamente");
        res.json(serviciosData);
    } catch (error) {
        console.error("Error al obtener los servicios: ", error); 
        res.status(500).json({ error: "Error al obtener los servicios" });  
    }   
};

const getServicioById = async (req, res) => {   
    try {
        const servicioId = req.params.id;
        const data = await fs.readFile(
            path.join(__dirname, "../data/servicios.json"),
            "utf-8"
        );
        const serviciosData = JSON.parse(data);
        const servicio = serviciosData.find((s) => s.id === parseInt(servicioId)); 
        
        if (servicio) {
            console.log(`Flag: Se ejecutó GET /servicios/${servicioId} exitosamente`);                                                            
            res.json(servicio);
        } else {                                                                   
            res.status(404).json({ error: "Servicio no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el servicio específico: ", error); 
        res.status(500).json({ error: "Error al obtener el servicio especificado" });  
    }
};

module.exports = { getServicios, getServicioById };
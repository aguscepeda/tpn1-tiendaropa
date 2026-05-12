const fs = require("fs").promises;
const path = require("path");

const getPerfilById = async (req, res) => {
    try {
        const perfilId = req.params.id;
        const data = await fs.readFile(
            path.join(__dirname, "../data/perfiles.json"),
            "utf-8"
        );
        const perfilesData = JSON.parse(data);
        const perfil = perfilesData.find((p) => p.id === parseInt(perfilId)); 
        
        if (perfil) {                                                            
            console.log(`Flag: Se ejecutó GET /perfil/${perfilId} exitosamente`);
            res.json(perfil);
        } else {                                                                   
            res.status(404).json({ error: "Perfil no encontrado" });
        }
    } catch (error) {
        console.error("Error al obtener el perfil: ", error); 
        res.status(500).json({ error: "Error al obtener el perfil especificado" });  
    }
};

module.exports = { getPerfilById };
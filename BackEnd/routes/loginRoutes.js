const express = require('express');
const fs = require('fs').promises;
const path = require('path');


const loginRouter = express.Router();

//Login del usuario
loginRouter.post("/", async (req, res) => {
    try {
        const { mail, password } = req.body;

        if (!mail || !password) {
            return res.status(400).json({
                error: "Debe ingresar mail y contraseña"
            });
        }

        const data = await fs.readFile(
            path.join(__dirname, "../data/usuarios.json"),
            "utf-8"
        );

        const usuarios = JSON.parse(data);

        const usuarioEncontrado = usuarios.find((usuario) => {
            return usuario.mail === mail && usuario.password === password;
        });

        if (!usuarioEncontrado) {
            return res.status(401).json({
                error: "Mail o contraseña incorrectos"
            });
        }

        res.json({
            mensaje: "Login exitoso",
            usuario: {
                id: usuarioEncontrado.id,
                nombre: usuarioEncontrado.nombre,
                mail: usuarioEncontrado.mail,
                perfilId: usuarioEncontrado.perfilId
            }
        });

    } catch (error) {
        console.error("Error en loginRouter.post('/'): ", error);

        res.status(500).json({
            error: "Error al intentar iniciar sesión"
        });
    }
});

module.exports = loginRouter;
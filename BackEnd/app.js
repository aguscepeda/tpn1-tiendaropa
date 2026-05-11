const express = require("express");
const cors = require("cors");

const app = express();

const serviciosRoutes = require("./routes/serviciosRoutes"); // traigo desde serviciosRoutes las rutas de servicios
const equipoRoutes = require("./routes/equipoRoutes"); // traigo desde equipoRoutes las rutas de equipo
const perfilesRoutes = require("./routes/perfilesRoutes"); // traigo desde perfilesRoutes las rutas de perfiles
const loginRoutes = require("./routes/loginRoutes"); // traigo desde loginRoutes las rutas de login
app.use(cors()); // permite que el FrontEnd pueda consumir la API desde otro puerto, por ejemplo Live Server 5500
app.use(express.json()); // middleware para parsear JSON en las solicitudes entrantes

app.get("/", (req, res) => {
  res.send("Servidor funcionando, PAGINA PRINCIPAL"); // cuando arranca el servidor, si no está esto muestra: Cannot GET /
});

app.use("/servicios", serviciosRoutes); // cuando se accede a /servicios, se redirige a serviciosRoutes
app.use("/equipo", equipoRoutes); // cuando se accede a /equipo, se redirige a equipoRoutes
app.use("/perfil", perfilesRoutes); // cuando se accede a /perfil/:id, se redirige a perfilesRoutes
app.use("/login", loginRoutes); // cuando se accede a /login, se redirige a loginRoutes

module.exports = app;

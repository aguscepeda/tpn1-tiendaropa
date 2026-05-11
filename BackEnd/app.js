const express = require("express");
const cors = require("cors");
const app = express();

const serviciosRoutes = require("./routes/serviciosRoutes"); //traigo desde serviciosRoutes las rutas de servicios
const equipoRoutes = require("./routes/equipoRoutes"); //traigo desde equipoRoutes las rutas de equipo
const perfilesRoutes = require("./routes/perfilesRoutes"); //traigo desde perfilesRoutes las rutas de perfiles

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON en las solicitudes entrantes

app.get("/", (req, res) => {
  res.send("Servidor funcionando, PAGINA PRINCIPAL");  //Cuando arranca el servidor, si no esta esto muestra: Cannot GET /
});



app.use("/servicios", serviciosRoutes);   //cuando se accede a /servicios, se redirige a serviciosRoutes para manejar las rutas relacionadas con servicios
app.use("/equipo", equipoRoutes);   //cuando se accede a /equipo, se redirige a equipoRoutes para manejar las rutas relacionadas con el equipo
app.use("/perfil", perfilesRoutes);   //cuando se accede a /perfil/:id, se redirige a perfilesRoutes para manejar las rutas relacionadas con los perfiles por id

module.exports = app;


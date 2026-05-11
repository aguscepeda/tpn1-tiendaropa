const express = require("express");
const app = express();

const serviciosRoutes = require("./routes/serviciosRoutes"); //traigo desde serviciosRoutes las rutas de servicios
const equipoRoutes = require("./routes/equipoRoutes"); //traigo desde equipoRoutes las rutas de equipo

app.use(express.json()); // Middleware para parsear JSON en las solicitudes entrantes

app.get("/", (req, res) => {
  res.send("Servidor funcionando");  //Cuando arranca el servidor, si no esta esto muestra: Cannot GET /
});

//RUTAS SERVICIOS ------------------------------------------------------------------------------------------------------>

app.use("/servicios", serviciosRoutes);   //cuando se accede a /servicios, se redirige a serviciosRoutes para manejar las rutas relacionadas con servicios
app.use("/servicios/:id", serviciosRoutes);   //cuando se accede a /servicios/:id, se redirige a serviciosRoutes para manejar las rutas relacionadas con servicios por id

//RUTAS EQUIPO ------------------------------------------------------------------------------------------------------>

app.use("/equipo", equipoRoutes);   //cuando se accede a /equipo, se redirige a equipoRoutes para manejar las rutas relacionadas con el equipo



module.exports = app;


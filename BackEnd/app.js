const express = require("express");
const app = express();

const serviciosRoutes = require("./routes/serviciosRoutes"); //traigo desde serviciosRoutes las rutas de servicios

app.get("/", (req, res) => {
  res.send("Servidor funcionando");  //Cuando arranca el servidor, si no esta esto muestra: Cannot GET /
});

app.use("/servicios", serviciosRoutes);   //cuando se accede a /servicios, se redirige a serviciosRoutes para manejar las rutas relacionadas con servicios
app.use("/servicios/:id", serviciosRoutes);   //cuando se accede a /servicios/:id, se redirige a serviciosRoutes para manejar las rutas relacionadas con servicios por id

module.exports = app;


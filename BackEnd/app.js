const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Servidor funcionando");  //Cuando arranca el servidor, si no esta esto muestra: Cannot GET /
});

module.exports = app;
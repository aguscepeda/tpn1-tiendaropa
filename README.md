# Urban Style Clothing — TP N°3

## Grupo N°16

### Integrantes

| N°  | Nombre                       | Rama                      |
| --- | ---------------------------- | ------------------------- |
| 1   | Cepeda Agustín               | `alumno1-agustinCepeda`   |
| 2   | Copreni Rodrigo              | `alumno2-rodrigoCopreni`  |
| 3   | Pascuali Agustín Mateo       | `alumno3-agustinPascuali` |
| 4   | Lares Santiago               | `alumno4-santiagoLares`   |
| 5   | Beltrame Juan Manuel Ramirez | `alumno5-juanBeltrame`    |

---

## Descripción del proyecto

**Urban Style Clothing** es una tienda de ropa online que vende todo tipo de indumentaria urbana a diferentes precios. El proyecto consiste en una API REST desarrollada con Node.js y Express que provee los datos del FrontEnd, reemplazando los datos estáticos del TP N°1.

- **FrontEnd (GitHub Pages):** https://aguscepeda.github.io/tpn1-tiendaropa/
- **BackEnd (Render):** https://tp1ytp3.onrender.com

---

## Metodología de trabajo con Git y GitHub

Se utilizó la metodología de **una rama por alumno**. Cada integrante trabajó en su propia rama y realizó Pull Requests hacia la rama `dev` para integrar los cambios. Una vez que todo estaba listo en `dev`, se hizo el merge final a `main` como entrega.

Flujo de trabajo: rama-alumno → dev → main

## Distribución de carpetas y archivos

tpn1-tiendaropa/
├── BackEnd/
│ ├── controllers/
│ │ ├── serviciosController.js
│ │ ├── equipoController.js
│ │ ├── perfilesController.js
│ │ └── loginController.js
│ ├── data/
│ │ ├── servicios.json
│ │ ├── equipo.json
│ │ ├── perfiles.json
│ │ └── usuarios.json
│ ├── models/
│ │ └── server.js
│ ├── routes/
│ │ ├── serviciosRoutes.js
│ │ ├── equipoRoutes.js
│ │ ├── perfilesRoutes.js
│ │ └── loginRoutes.js
│ ├── .env
│ ├── .gitignore
│ ├── .eslintrc.json
│ ├── app.js
│ └── package.json
└── FrontEnd/
├── assets/
│ ├── img/
│ └── css/
└── pages/
├── servicios.html
├── equipo.html
├── login.html
├── perfil.html
└── registro.html

## División de archivos entre integrantes

| Archivo / Tarea                                                                                                                                                                                  | Responsable          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `models/server.js`, `app.js`, `package.json`, `.eslintrc.json`, `.vscode/settings`, `routes/perfilesRoutes.js`, `routes/loginRoutes.js`, integración FrontEnd con API, `faq.html`, `pedido.html` | Copreni Rodrigo      |
| `controllers/serviciosController.js`                                                                                                                                                             | Cepeda Agustín       |
| `routes/serviciosRoutes.js`                                                                                                                                                                      | Cepeda Agustín       |
| `controllers/equipoController.js`                                                                                                                                                                | Lares Santiago       |
| `routes/equipoRoutes.js`                                                                                                                                                                         | Lares Santiago       |
| `data/equipo.json`                                                                                                                                                                               | Lares Santiago       |
| `controllers/perfilesController.js`                                                                                                                                                              | Pascuali Agustín     |
| `data/perfiles.json`                                                                                                                                                                             | Pascuali Agustín     |
| `controllers/loginController.js`                                                                                                                                                                 | Beltrame Juan Manuel |
| `data/usuarios.json`                                                                                                                                                                             | Beltrame Juan Manuel |

## Funciones explicadas

### `app.js`

Archivo de entrada del servidor. Importa la clase `Server` desde `models/server.js`, crea una instancia y llama al método `listen()` para iniciar la API.

```js
const Server = require('./models/server')
const server = new Server()
server.listen()
```

---

### `models/server.js` — Clase `Server`

Clase principal que configura y levanta el servidor Express.

**`constructor()`**
Inicializa la app de Express, define el puerto desde la variable de entorno `PORT` (o 3000 por defecto), y llama a `middleware()` y `rutas()`.

**`middleware()`**
Configura los middlewares globales:

- `cors()` — permite solicitudes desde cualquier origen (necesario para que el FrontEnd en GitHub Pages pueda consumir la API en Render)
- `express.json()` — permite recibir y parsear cuerpos de solicitud en formato JSON

**`rutas()`**
Define todas las rutas de la API y las conecta con sus archivos de rutas correspondientes. También configura el manejo de errores:

- `404` — cuando se accede a una ruta que no existe
- `500` — cuando ocurre un error interno del servidor

**`listen()`**
Pone el servidor a escuchar en el puerto configurado y muestra un mensaje en consola confirmando que la API está activa.

---

### `controllers/serviciosController.js`

**`getServicios(req, res)`**
Lee el archivo `servicios.json` de forma asíncrona y devuelve el array completo de productos en formato JSON. Si ocurre un error, responde con status 500.

**`getServicioById(req, res)`**
Recibe un `id` por parámetro de URL, lee `servicios.json` y busca el producto cuyo `id` coincide. Si lo encuentra responde con el objeto, si no responde con status 404.

---

### `controllers/equipoController.js`

**`getEquipo(req, res)`**
Lee el archivo `equipo.json` de forma asíncrona y devuelve el array completo de integrantes del equipo en formato JSON. Si ocurre un error, responde con status 500.

---

### `controllers/perfilesController.js`

**`getPerfilById(req, res)`**
Recibe un `id` por parámetro de URL, lee `perfiles.json` y busca el perfil cuyo `id` coincide. Devuelve nombre, mail, fecha de registro, foto y últimos 3 pedidos. Si no lo encuentra responde con status 404.

---

### `controllers/loginController.js`

**`postLogin(req, res)`**
Recibe `mail` y `password` del cuerpo de la solicitud (req.body). Valida que ambos campos estén presentes, luego lee `usuarios.json` y busca un usuario que coincida con ambos datos. Si lo encuentra devuelve los datos del usuario (id, nombre, mail, perfilId). Si no coincide responde con status 401.

---

### `routes/serviciosRoutes.js`

Define las rutas del endpoint `/servicios`:

- `GET /servicios` → `getServicios`
- `GET /servicios/:id` → `getServicioById`

### `routes/equipoRoutes.js`

Define la ruta del endpoint `/equipo`:

- `GET /equipo` → `getEquipo`

### `routes/perfilesRoutes.js`

Define la ruta del endpoint `/perfil`:

- `GET /perfil/:id` → `getPerfilById`

### `routes/loginRoutes.js`

Define la ruta del endpoint `/login`:

- `POST /login` → `postLogin`

---

## Estructura de los archivos JSON

### `servicios.json`

```json
{
  "id": 1,
  "nombre": "Remera Oversize Negra",
  "descripcion": "Remera urbana de algodón premium.",
  "precio": 25000,
  "stock": 12,
  "imagen": "Remera_img.jpg"
}
```

### `equipo.json`

```json
{
  "id": 1,
  "nombre": "Agustín Cepeda",
  "rol": "Fundador y Desarrollador",
  "descripcion": "Líder del proyecto y encargado de la plataforma digital.",
  "foto": "../assets/img/desarrollador.png"
}
```

### `perfiles.json`

```json
{
  "id": 1,
  "nombre": "Agustín Cepeda",
  "mail": "agustincepeda@gmail.com",
  "fechaRegistro": "2026-03-15",
  "foto": "../assets/img/perfil-placeholder.png",
  "ultimosPedidos": [
    "Remera Oversize Negra",
    "Jogger Negro",
    "Gorra Snapback Negra"
  ]
}
```

### `usuarios.json`

```json
{
  "id": 1,
  "nombre": "Agustín Cepeda",
  "mail": "agustincepeda@gmail.com",
  "password": "1234",
  "perfilId": 1
}
```

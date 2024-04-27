const express = require('express');
const path = require('path');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configuraciones básicas
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configuración para archivos estáticos
app.use(express.static("public")); 

// Registrar las rutas
app.use('/', userRoutes);

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'usuarios.html'));
});


app.listen(3003, function () {
    console.log("Servidor creado http://localhost:3003");
  });
  
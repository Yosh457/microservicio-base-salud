const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const categoriaRoutes = require('./routes/categoriaRoutes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: "API Microservicio Salud Funcionando", env: config.NODE_ENV });
});

// Registro de rutas
app.use('/api/categorias', categoriaRoutes);

// Error Handler (importante dejarlo al final)
// app.use(errorHandler);

module.exports = app;
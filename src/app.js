const express = require('express');
const cors = require('cors');
const config = require('./config/config');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({ mensaje: "API Microservicio Salud Funcionando", env: config.NODE_ENV });
});

module.exports = app;
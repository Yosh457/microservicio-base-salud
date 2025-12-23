const Categoria = require('../models/categoriaModel');

const getStatus = async (req, res, next) => {
    try {
        await Categoria.checkDB();
        res.status(200).json({ status: 'UP', database: 'Connected' });
    } catch (error) {
        next(error); // El middleware global atrapará si la DB está caída
    }
};

const listarCategorias = async (req, res, next) => {
    try {
        const data = await Categoria.getAll();
        res.status(200).json({ status: 'success', data });
    } catch (error) {
        next(error);
    }
};

module.exports = { getStatus, listarCategorias };
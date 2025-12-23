const db = require('../config/db');

const Categoria = {
    // Método para el Health Check (Una query simple)
    checkDB: async () => {
        await db.query('SELECT 1');
        return true;
    },

    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM categorias');
        return rows;
    }
};

module.exports = Categoria;
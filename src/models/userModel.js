const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    // Buscar usuario por nombre
    findByUsername: async (username) => {
        const [rows] = await db.query('SELECT * FROM usuarios WHERE username = ?', [username]);
        return rows[0];
    },

    // Crear usuario con contraseña encriptada (Para tu futuro Register)
    create: async (username, password) => {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password, salt);
        
        const [result] = await db.query(
            'INSERT INTO usuarios (username, password) VALUES (?, ?)',
            [username, hashedPass]
        );
        return result.insertId;
    }
};

module.exports = User;
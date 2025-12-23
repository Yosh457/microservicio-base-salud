const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/health', categoriaController.getStatus);
router.get('/', categoriaController.listarCategorias);

module.exports = router;
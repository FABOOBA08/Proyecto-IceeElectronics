const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Rutas para usuarios
router.get('/obtener-usuarios', UserController.obtenerUsuarios);
router.post('/validar', UserController.crearUsuario);
router.delete('/eliminar-usuario/:id', UserController.eliminarUsuario);
router.get('/usuario/:id', UserController.obtenerUsuarioPorId); 
router.put('/usuario/:id/actualizar', UserController.actualizarUsuario); 
module.exports = router;

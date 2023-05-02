const express = require('express');
const router = express.Router();
const authController = require("../controllers/perfilDeEntrenamiento");

router.get('/obtener/:perfilId', authController.obtenerPerfil); //obtener información de un perfil de entrenamiento específico
router.post('/crear', authController.crearPerfil); //crear un nuevo perfil de entrenamiento
router.put('/actualizar/:perfilId', authController.actualizarPerfil); //actualizar información de un perfil de entrenamiento específico
router.delete('/borrar/:perfilId', authController.borrarPerfil); //eliminar un perfil de entrenamiento específico


module.exports = router; 
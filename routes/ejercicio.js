const express = require('express');
const router = express.Router();
const authController = require("../controllers/ejercicio");

router.get('/obtener/:ejercicioId', authController.obtenerEjercicio); //obtener información de un ejercicio específico
router.post('/crear', authController.crearEjercicio);
router.put('/actualizar/:ejercicioId', authController.actualizarEjercicio); //actualizar información de un ejercicio específico
router.delete('/borrar/:ejercicioId', authController.borrarEjercicio); //eliminar un ejercicio específico


module.exports = router; 
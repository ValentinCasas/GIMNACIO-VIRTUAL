const express = require('express');
const router = express.Router();
const authController = require("../controllers/detalleRutina");

router.get('/obtener/:detalleId', authController.obtenerDetalleRutina); //obtener información de un detalle de rutina específico.
router.post('/crear', authController.crearDetalleRutina);
router.put('/actualizar/:detalleId', authController.actualizarDetalleRutina); //actualizar información de un detalle de rutina 
router.delete('/borrar/:detalleId', authController.borrarDetalleRutina); //eliminar un detalle de rutina específico

module.exports = router; 
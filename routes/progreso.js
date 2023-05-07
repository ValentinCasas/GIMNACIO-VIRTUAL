const express = require('express');
const router = express.Router();
const authController = require("../controllers/progreso");

router.get('/view', authController.viewProgreso);
router.get('/obtener/:progresoId', authController.obtenerProgreso); //obtener información del progreso de un usuario específico.
router.post('/crear', authController.crearProgreso);
router.put('/actualizar/:progresoId', authController.actualizarProgreso); //actualizar información del progreso de un usuario específico.
router.delete('/borrar/:progresoId', authController.borrarProgreso); //eliminar un registro de progreso específico.

module.exports = router; 
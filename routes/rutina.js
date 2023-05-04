const express = require('express');
const router = express.Router();
const authController = require("../controllers/rutina");

router.get('/view', authController.viewRutinas);    

router.get('/obtener/:rutinaId', authController.obtenerRutina); //obtener información de una rutina específica
router.post('/crear', authController.crearRutina);
router.put('/actualizar/:rutinaId', authController.actualizarRutina); //actualizar información de una rutina específica
router.delete('/borrar/:rutinaId', authController.borrarRutina); //eliminar una rutina específica

module.exports = router; 
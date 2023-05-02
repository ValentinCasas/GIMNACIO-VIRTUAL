const express = require('express');
const router = express.Router();
const authController = require("../controllers/usuario");

router.get ('/obtener/:userId', authController.obtenerUsuario); //obtener información de un usuario específico
router.put('/actualizar/:userId', authController.actualizarUsuario); //actualizar información de un usuario específico
router.delete('/borrar/:userId', authController.eliminarUsuario); //eliminar un usuario específico.


module.exports = router; 
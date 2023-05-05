const express = require('express');
const router = express.Router();
const ejercicioController = require("../controllers/ejercicio");

router.get('/listaEjercicios/view', ejercicioController.viewListaEjercicios);
router.get('/listaEjercicios/view/create', ejercicioController.viewCrearListaEjercicios);
router.post('/listaEjercicios/create', ejercicioController.crearListaEjercicios);
router.get('/borrar/listaEjercicios/:listaEjerciciosId', ejercicioController.borrarListaEjercicios); 

router.get('/obtener/:ejercicioId', ejercicioController.obtenerEjercicio); //obtener información de un ejercicio específico
router.post('/crear', ejercicioController.crearEjercicio);
router.put('/actualizar/:ejercicioId', ejercicioController.actualizarEjercicio); //actualizar información de un ejercicio específico
router.get('/borrar/:ejercicioId', ejercicioController.borrarEjercicio); //eliminar un ejercicio específico


module.exports = router; 
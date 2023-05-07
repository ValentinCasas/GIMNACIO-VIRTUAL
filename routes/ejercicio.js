const express = require('express');
const router = express.Router();
const ejercicioController = require("../controllers/ejercicio");

router.get('/listaEjercicios/view', ejercicioController.viewListaEjercicios);
router.get('/listaEjercicios/view/create', ejercicioController.viewCrearListaEjercicios);
router.post('/listaEjercicios/create', ejercicioController.crearListaEjercicios);
router.get('/borrar/listaEjercicios/:listaEjerciciosId', ejercicioController.borrarListaEjercicios); 
router.get('/listaEjercicios/:idLista', ejercicioController.viewListaParticular);
router.get('/view/enlistar/:ejercicioId', ejercicioController.viewEnlistar);


router.delete('/desenlistar/:ejercicioId/:listaId', ejercicioController.desenlistar);
router.post('/enlistar', ejercicioController.enlistar);


router.get('/view', ejercicioController.viewEjercicios);
router.get('/view/crear', ejercicioController.viewCrearEjercicios);
router.get('/obtener/:ejercicioId', ejercicioController.viewObtenerEjercicio); 
router.post('/crear', ejercicioController.crearEjercicio);
router.post('/actualizar', ejercicioController.actualizarEjercicio); 
router.get('/borrar/:ejercicioId', ejercicioController.borrarEjercicio); 

router.post('/agregar-ejercicios-a-lista', ejercicioController.agregarEjercicioALista);

module.exports = router; 
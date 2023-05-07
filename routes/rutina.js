const express = require('express');
const router = express.Router();
const rutinaController = require("../controllers/rutina");

router.get('/view', rutinaController.viewRutinas);  
router.get('/listas-ejercicios/:idRutina', rutinaController.viewListasRutina);

router.get('/borrar/:idRutina', rutinaController.borrarRutina)
router.get('/obtener/:rutinaId', rutinaController.obtenerRutina); 

router.post('/crear', rutinaController.crearRutina)

router.get('/view/create', rutinaController.viewCrearRutina);
router.post('/agregar-listas-a-rutina', rutinaController.agregarLista)
router.delete('/borra-lista-de-rutina/:idRutina/:idLista', rutinaController.borrarLista)



module.exports = router; 
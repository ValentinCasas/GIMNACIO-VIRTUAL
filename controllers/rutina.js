
const { Rutina, Usuario, RutinaLista, ListaEjercicios } = require('../models');
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const fs = require('fs');



exports.viewRutinas = async function (req, res) {
    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    const rutinas = await Rutina.findAll({ where: { idUsuario: usuario[0].id } });
    res.render("rutinas", { Rutinas: rutinas });
};


exports.viewCrearRutina = function (req, res) {
    res.render("crearRutina");
}


exports.viewListasRutina = async function (req, res) {
    const { idRutina } = req.params;

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })

    const rutinas = await RutinaLista.findAll({ where: { idRutina: idRutina, idUsuario: usuario[0].id } });
    const listaIds = rutinas.map(rutina => rutina.idLista);
    const listas = await ListaEjercicios.findAll({ where: { id: listaIds } });


    const misListas = await ListaEjercicios.findAll({ where: { idUsuario: usuario[0].id } });

    res.render("mis-rutinas", { listasEjercicios: misListas, Lista: listas, idRutina: idRutina });
}

exports.crearRutina = async function (req, res) {
    const { titulo } = req.body;
    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    let rutaImagen = "";
    let imagenRutina;

    if (req.files === null) {
        rutaImagen = "imagenes-importantes/gym-por-defecto.jpg";
    } else {
        imagenRutina = req.files.imagenRutina;
        rutaImagen = uuid.v1() + imagenRutina.name;
    }

    await Rutina.create({
        titulo: titulo,
        fechaCreacion: Date.now(),
        idUsuario: usuario[0].id,
        imagenRutina: rutaImagen,
    }).then(() => {
        if (imagenRutina) {
            imagenRutina.mv("./public/imagenes-rutinas/" + rutaImagen);
        }
        res.redirect("/rutinas/view/create");
    });

}

exports.agregarLista = async function (req, res) {
    const { idRutina, listasSeleccionadas } = req.body;

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    const idUsuario = usuario[0].id;

    // Convertir listasSeleccionadas en un array si no lo es
    const listas = Array.isArray(listasSeleccionadas) ? listasSeleccionadas : [listasSeleccionadas];

    // Recorrer todas las listas de ejercicios seleccionadas y agregarlas a la rutina
    for (const idLista of listas) {
        await RutinaLista.create({
            idRutina: idRutina,
            idLista: idLista,
            idUsuario: idUsuario
        });
    }

    res.redirect(`/rutinas/listas-ejercicios/${idRutina}`);
}

exports.borrarLista = async function (req, res) {

    try {
        const { idRutina, idLista } = req.params;

        const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
        const idUsuario = usuario[0].id;

        await RutinaLista.destroy({
            where: {
                idRutina: idRutina,
                idLista: idLista,
                idUsuario: idUsuario
            }
        });

        // Redirigir a la página correspondiente
        res.json({ idLista: idLista });
    } catch (error) {
        // Devolver un objeto JSON indicando error
        res.status(500).json({ error: error.message });
    }
}


exports.borrarRutina = async function (req, res) {
    const { idRutina } = req.params;



    const rutina = await Rutina.findAll({ where: { id: idRutina } });
    let rutaImagen = `./public/imagenes-rutinas/${rutina[0].imagenRutina}`;

    await RutinaLista.destroy({ where: { idRutina: idRutina } });

    await Rutina.destroy({ where: { id: idRutina } });

    if (rutina[0].imagenLista !== "imagenes-importantes/gym-por-defecto.jpg" && fs.existsSync(rutaImagen)) {
        fs.unlinkSync(rutaImagen);
    }


    res.redirect("/rutinas/view");
}

exports.obtenerRutina = function (req, res) {
};





const { ListaEjercicios, Ejercicio, Usuario, listaEjercicio } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const fs = require('fs');

const NivelDificultad = {
    1: 'bajo',
    2: 'intermedio',
    3: 'avanzado'
};

/* todas las listas */
exports.viewListaEjercicios = async function (req, res) {

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    const listaEjercicios = await ListaEjercicios.findAll({ where: { idUsuario: usuario[0].id } });

    res.render('listaEjercicios', { ListaEjercicios: listaEjercicios });
};

exports.viewEnlistar = async function (req, res) {
    const { ejercicioId } = req.params;

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    const ejercicio = await Ejercicio.findAll({ where: { id: ejercicioId } });
    const listas = await ListaEjercicios.findAll({ where: { idUsuario: usuario[0].id } });

    res.render('enlistar', { Ejercicio: ejercicio[0], Listas: listas, ejercicioId: ejercicioId });
};

exports.desenlistar = async function (req, res) {
    try {
        const { ejercicioId, listaId } = req.params;

        await listaEjercicio.destroy({ where: { idEjercicio: ejercicioId, idLista: listaId } })

        const listaEjercicios = await listaEjercicio.findAll({
            where: { idLista: listaId },
            include: { model: Ejercicio },
        });

        const ejercicios = await Ejercicio.findAll();

        const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })

        // Redirigir a la página correspondiente
        res.json({ ejercicioId: ejercicioId });
    } catch (error) {
        // Devolver un objeto JSON indicando error
        res.status(500).json({ error: error.message });
    }
};


/* una lista en particular */
exports.viewListaParticular = async function (req, res) {
    const { idLista } = req.params;

    const listaEjercicios = await listaEjercicio.findAll({
        where: { idLista: idLista },
        include: { model: Ejercicio },
    });

    const ejercicios = await Ejercicio.findAll();

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })

    res.render('ejercicios-lista-particular', { ListaParticular: listaEjercicios, Ejercicios: ejercicios, Usuario: usuario, listaId: idLista });
};

exports.agregarEjercicioALista = async function (req, res) {
    const { idLista, ejerciciosSeleccionados } = req.body;

    const ejercicios = Array.isArray(ejerciciosSeleccionados) ? ejerciciosSeleccionados : [ejerciciosSeleccionados];

    for (const idEjercicio of ejercicios) {
        await listaEjercicio.create({
            idEjercicio: idEjercicio,
            idLista: idLista,
        });
    }

    res.redirect(`/ejercicio/listaEjercicios/${idLista}`);
}


/* vista crear listas */
exports.viewCrearListaEjercicios = function (req, res) {

    res.render('crearListaEjercicios');
};


/* crear lista */
exports.crearListaEjercicios = async function (req, res) {
    const { titulo } = req.body;
    let rutaImagen = "";
    let imagenListaEjercicios;

    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })

    if (req.files === null) {
        rutaImagen = "imagenes-importantes/gym-por-defecto.jpg";
    } else {
        imagenListaEjercicios = req.files.imagenListaEjercicios;
        rutaImagen = uuid.v1() + imagenListaEjercicios.name;
    }

    await ListaEjercicios.create({
        titulo: titulo,
        fechaCreacion: Date.now(),
        imagenLista: rutaImagen,
        idUsuario: usuario[0].id,
    }).then(() => {
        if (imagenListaEjercicios) {
            imagenListaEjercicios.mv("./public/imagenes-lista-ejercicios/" + rutaImagen);
        }
        res.redirect('/ejercicio/listaEjercicios/view/create');
    });
};

/* enlistar */
exports.enlistar = async function (req, res) {
    const { idLista, ejercicioId } = req.body;

    await listaEjercicio.create({
        idEjercicio: ejercicioId,
        idLista: idLista,
    });

    res.redirect(`/ejercicio/view/enlistar/${ejercicioId}`);

};



/* borrar lista */
exports.borrarListaEjercicios = async function (req, res) {
    const { listaEjerciciosId } = req.params;

    const lista = await ListaEjercicios.findAll({ where: { id: listaEjerciciosId } });
    let rutaImagen = `./public/imagenes-lista-ejercicios/${lista[0].imagenLista}`;

    await listaEjercicio.destroy({ where: { idLista: listaEjerciciosId } });
    await ListaEjercicios.destroy({ where: { id: listaEjerciciosId } });

    if (lista[0].imagenLista != "imagenes-importantes/gym-por-defecto.jpg") {
        fs.unlinkSync(rutaImagen, (err) => {
            if (err) throw err;
        });
    }


    res.redirect("/ejercicio/listaEjercicios/view");
};


/* todos los ejercicios */
exports.viewEjercicios = async function (req, res) {
    const ejercicios = await Ejercicio.findAll();
    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })
    res.render('ejercicios', { Ejercicio: ejercicios, Usuario: usuario });
};

exports.viewCrearEjercicios = async function (req, res) {
    res.render('crearEjercicio');
};

exports.crearEjercicio = async function (req, res) {
    const { nombre, descripcion, nivelDificultad, grupoMuscular } = req.body;

    await Ejercicio.create({
        nombre: nombre,
        descripcion: descripcion,
        nivelDificultad: NivelDificultad[nivelDificultad],
        grupoMuscular: grupoMuscular,
    })

    res.redirect("/ejercicio/view/crear");
}

exports.viewObtenerEjercicio = async function (req, res) {
    const { ejercicioId } = req.params;

    const ejercicio = await Ejercicio.findAll({ where: { id: ejercicioId } });

    res.render("editarEjercicio", { Ejercicio: ejercicio[0] });
};


exports.actualizarEjercicio = async function (req, res) {
    const { nombre, descripcion, grupoMuscular, id } = req.body;
    let { nivelDificultad } = req.body;

    await Ejercicio.update(
        {
            nombre: nombre,
            descripcion: descripcion,
            nivelDificultad: NivelDificultad[nivelDificultad],
            grupoMuscular: grupoMuscular
        },
        {
            where: { id: id }
        }
    );


    res.redirect(`/ejercicio/obtener/${id}`)
};


exports.borrarEjercicio = async function (req, res) {
    const { ejercicioId } = req.params;

    await Ejercicio.destroy({ where: { id: ejercicioId } });

    res.redirect("/ejercicio/view");
};

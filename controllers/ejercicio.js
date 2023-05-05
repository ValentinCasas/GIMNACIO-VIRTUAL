const { ListaEjercicios, Ejercicio } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

exports.viewListaEjercicios = async function (req, res) {

    const listaEjercicios = await ListaEjercicios.findAll();

    res.render('listaEjercicios', { ListaEjercicios: listaEjercicios });
};

exports.viewCrearListaEjercicios = function (req, res) {

    res.render('crearListaEjercicios');
};

exports.crearListaEjercicios = async function (req, res) {
    const { titulo } = req.body;
    let rutaImagen = "";
    let imagenListaEjercicios;

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
    }).then(() => {
        if (imagenListaEjercicios) {
            imagenListaEjercicios.mv("./public/imagenes-lista-ejercicios/" + rutaImagen);
        }
        res.redirect('/ejercicio/listaEjercicios/view/create');
    });
};

exports.borrarListaEjercicios = async function (req, res) {
    const { listaEjerciciosId } = req.params;

    const listaEjercicio = await ListaEjercicios.findAll({ where: { id:listaEjerciciosId } });

    await Ejercicio.destroy({ where: { idListaEjercicio: listaEjercicio[0].id } });
    await ListaEjercicios.destroy({ where: { id: listaEjerciciosId } });

    res.redirect("/ejercicio/listaEjercicios/view");
};



exports.obtenerEjercicio = function (req, res) {

};

exports.crearEjercicio = function (req, res) {

}


exports.actualizarEjercicio = function (req, res) {

};


exports.borrarEjercicio = function (req, res) {

};

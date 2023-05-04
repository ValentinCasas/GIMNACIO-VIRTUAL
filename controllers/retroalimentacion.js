
const { Usuario, Retroalimentacion, votosRetroalimentacion } = require('../models');

exports.viewRetroalimentacion = async function (req, res) {

    const usuarios = await Usuario.findAll();
    const retroalimentaciones = await Retroalimentacion.findAll({ include: Usuario });
    const votos = await votosRetroalimentacion.findAll({ include: [{ model: Usuario, }, { model: Retroalimentacion, },], });

    res.render("retroalimentacion", { Usuarios: usuarios, Retroalimentacion: retroalimentaciones.reverse(), Votos: votos, req: req });
}

exports.crearRetroalimentacion = async function (req, res) {
    const { retroalimentacion, idUsuario } = req.body;

    const usuario = await Usuario.findAll({ where: { sessionId: idUsuario } })

    let nuevaRetroalimentacion;

    if (retroalimentacion != "") {
        nuevaRetroalimentacion = await Retroalimentacion.create({
            descripcion: retroalimentacion,
            fechaRetroalimentacion: new Date(),
            idUsuario: usuario[0].id,
        });
    }

    res.json({ nuevaRetroalimentacion });
}

exports.votar = async function (req, res) {
    const { idUsuario, idRetroalimentacion } = req.params;
    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } })

    const votoAnterior = await votosRetroalimentacion.findOne({
        where: {
            idUsuario: usuario[0].id,
            idRetroalimentacion: idRetroalimentacion
        }
    });

    if (votoAnterior) {
        await votosRetroalimentacion.destroy({
            where: {
                idUsuario: usuario[0].id,
                idRetroalimentacion: idRetroalimentacion
            }
        });
    } else {
        // Si el usuario no ha votado, entonces crea un nuevo voto
        await votosRetroalimentacion.create({
            idUsuario: usuario[0].id,
            idRetroalimentacion: idRetroalimentacion,
        });
    }


    res.redirect("/retroalimentacion/view");
};

exports.borrarRetroalimentacion = async function (req, res) {
    const { retroId } = req.params;
    let idRetroalDelete = await Retroalimentacion.findByPk(retroId);
    idRetroalDelete = idRetroalDelete.id;

    await votosRetroalimentacion.destroy({ where: { idRetroalimentacion: retroId } });
    await Retroalimentacion.destroy({ where: { id: retroId } });

    res.json({ idRetroalDelete });
};



exports.obtenerRetroalimentacion = function (req, res) {

};

exports.actualizarRetroalimentacion = async function (req, res) {
    const { retroId } = req.params;
    const { retroalimentacion } = req.body;

    await Retroalimentacion.update({
        descripcion: retroalimentacion,
    }, {
        where: { id: retroId }
    });

    res.redirect("/retroalimentacion/view");
};




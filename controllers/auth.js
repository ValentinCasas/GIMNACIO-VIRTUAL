
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

const Rol = {
    1: 'cliente',
    2: 'administrador',
    3: 'empleado'
};

/* auth/view/login */
exports.viewLogin = function (req, res) {
    res.render("login");
};

/* auth/view/register */
exports.viewRegister = async function (req, res) {
    const usuario = await Usuario.findAll({ where: { sessionId: req.sessionID } });
    let rol = Rol[1];
    if (usuario.length > 0) {
        rol = usuario[0].rol || Rol[1];
    }
    res.render("register", { rol });
};


const NivelEntrenamiento = {
    1: 'bajo',
    2: 'intermedio',
    3: 'avanzado'
};


/* auth/signup */
exports.signup = async function (req, res) {
    const { nombre, nivelEntrenamiento, objetivos, mail, contrasenia, confirmarContrasenia } = req.body;
    let { rol } = req.body;
    let rutaImagen = "";
    let imagenPerfil;

    if (contrasenia != confirmarContrasenia) {
        return res.render('register', { error: 'Las contraseñas no coinciden' });
    }

    if (req.files === null) {
        rutaImagen = "imagenes-importantes/noAutenticated.png";
    } else {
        imagenPerfil = req.files.imagenPerfil;
        rutaImagen = uuid.v1() + imagenPerfil.name;
    }


    const salt = await bcrypt.genSalt(10);
    const contraseniaHash = await bcrypt.hash(contrasenia, salt);

    await Usuario.findOne({ where: { correoElectronico: mail } })
        .then(usuario => {
            if (!usuario) {
                Usuario.create({
                    nombre: nombre,
                    correoElectronico: mail,
                    contraseña: contraseniaHash,
                    fechaRegistro: new Date(),
                    nivelEntrenamiento: NivelEntrenamiento[nivelEntrenamiento],
                    objetivosEntrenamiento: objetivos,
                    imagenPerfil: rutaImagen,
                    rol: rol ? Rol[rol] : Rol[1] ,
                }).then(() => {
                    if (imagenPerfil) {
                        imagenPerfil.mv("./public/imagenes-perfil-usuario/" + rutaImagen);
                    }
                    res.render("login");
                });
            } else {
                res.render('register', { error: 'Ya hay un usuario con el email: ' + mail });
            }
        });
};

exports.login = async function (req, res, next) {
    let { mail, contrasenia } = req.body;
    let = sessionId = req.sessionID;

    const user = await Usuario.findAll({ where: { correoElectronico: mail } });

    if (user.length == 1) {
        const validado = await bcrypt.compare(contrasenia, user[0].contraseña);
        if (validado) {
            await Usuario.update({ sessionId: sessionId }, { where: { correoElectronico: mail } });
            req.session.isLoggedIn = true;
            res.redirect("/")
        } else {
            res.render("login", { error: 'contraseña incorrecta' })
        }
    } else {
        res.render("login", { error: 'credenciales invalidas' });
    }
};

exports.logout = function (req, res, next) {
    req.session.destroy();
    res.redirect("/");
}



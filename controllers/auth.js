
const { Usuario } = require("../models");
const bcrypt = require("bcrypt");
const uuid = require("uuid");


/* auth/view/login */
exports.viewLogin = function (req, res) {
    res.render("login");
};

/* auth/view/register */
exports.viewRegister = function (req, res) {
    res.render("register");
};


const NivelEntrenamiento = {
    1: 'bajo',
    2: 'intermedio',
    3: 'avanzado'
};

/* auth/signup */
exports.signup = async function (req, res) {
    const { nombre, nivelEntrenamiento, objetivos, mail, contrasenia, confirmarContrasenia } = req.body;
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
                }).then(() => {
                    if (imagenPerfil) {
                        imagenPerfil.mv("./public/imagenes-perfil-usuario/" + rutaImagen);
                    }
                    res.render("login", { correcto: 'cuenta creada exitosamente' });
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
            res.redirect("/?correcto=accediste exitosamente")
        } else {
            res.render("login", { error: 'contraseña incorrecta' })
        }
    } else {
        res.render("login", { error: 'credenciales invalidas' });
    }
};

exports.logout = function (req, res, next) {
    req.session.destroy();
    res.redirect("/?correcto=sesión cerrada");
}



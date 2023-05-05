var createError = require('http-errors');
var express = require('express');
var path = require('path');
const logger = require('morgan');
const methodOverride = require("method-override");
const session = require("express-session");
var cookieParser = require('cookie-parser');
const passport = require("passport");
const bodyparser = require('body-parser');
const upload = require("express-fileupload");

const indexRouter = require('./routes/index')
var isAutenticatedBD = require("./routes/auth").isAutenticatedBD;
const authRouter = require('./routes/auth').router;
const detalleRutinaRouter = require('./routes/detalleRutina')
const ejercicioRouter = require('./routes/ejercicio')
const perfilDeEntrenamientoRouter = require('./routes/perfilDeEntrenamiento')
const progresoRouter = require('./routes/progreso')
const retroalimentacionRouter = require('./routes/retroalimentacion')
const rutinaRouter = require('./routes/rutina')
const usuarioRouter = require('./routes/usuario')

var app = express();

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "palabra secreta",
  })
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(path.join(__dirname, 'public/javascripts')));
app.use(express.static(path.join(__dirname, 'public/imagenes-gym/img-deportistas')));
app.use(express.static(path.join(__dirname, 'public/imagenes-importantes')));
app.use(express.static(path.join(__dirname, 'public/imagenes-perfil-usuario')));
app.use(express.static(path.join(__dirname, 'public/imagenes-lista-ejercicios')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(upload({ limits: { fileSize: 1024 * 1024 } }));
app.use(cookieParser());

//middlewarre que añade isLoggedIn a res.locals
app.use(function(req, res, next) {
  res.locals.isLoggedIn = req.session.isLoggedIn || false;
  next();
});

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/detalleRutina', detalleRutinaRouter);
app.use('/ejercicio', ejercicioRouter);
app.use('/perfilDeEntrenamiento', perfilDeEntrenamientoRouter);
app.use('/progreso', progresoRouter);
app.use('/retroalimentacion', retroalimentacionRouter);
app.use('/rutinas', rutinaRouter);
app.use('/usuario', usuarioRouter);







// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

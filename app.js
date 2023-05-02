var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const session = require("express-session");
var logger = require('morgan');

const indexRouter = require('./routes/index')
const authRouter = require('./routes/auth')
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
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/detalleRutina', detalleRutinaRouter);
app.use('/ejercicio', ejercicioRouter);
app.use('/perfilDeEntrenamiento', perfilDeEntrenamientoRouter);
app.use('/progreso', progresoRouter);
app.use('/retroalimentacion', retroalimentacionRouter);
app.use('/rutina', rutinaRouter);
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

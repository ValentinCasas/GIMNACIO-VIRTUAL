-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-07-2023 a las 01:27:28
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gimnasio_virtual`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallerutina`
--

CREATE TABLE `detallerutina` (
  `id` int(11) NOT NULL,
  `idRutina` int(11) NOT NULL,
  `idEjercicio` int(11) NOT NULL,
  `tiempoEntrenamiento` time NOT NULL,
  `frecuenciaEjercicio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `descripcion` varchar(700) NOT NULL,
  `nivelDificultad` varchar(20) NOT NULL,
  `grupoMuscular` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `ejercicio`
--

INSERT INTO `ejercicio` (`id`, `nombre`, `descripcion`, `nivelDificultad`, `grupoMuscular`) VALUES
(1, 'mancuerna cruzada', '    Calentamiento (15 minutos):\r\n\r\n    5 minutos de caminata ligera en la cinta o bicicleta estática.\r\n    5 minutos de estiramientos dinámicos.\r\n    5 minutos de movilidad articular.\r\n\r\n    Fase de fuerza y resistencia (60 minutos):\r\n\r\n    5 series de sentadillas con barra (8-10 repeticiones).\r\n    5 series de press de banca con barra (8-10 repeticiones).\r\n    4 series de peso muerto (8-10 repeticiones).\r\n    4 series de dominadas (8-10 repeticiones).\r\n    4 series de curl de bíceps con mancuernas (10-12 repeticiones).\r\n    4 series de extensiones de tríceps con mancuernas (10-12 repeticiones).\r\n    3 series de elevaciones laterales con mancuernas (12-15 repeticiones).\r\n    3 series de curl', 'bajo', 'bicep'),
(2, 'pecho frontal', '    Calentamiento (15 minutos):\r\n\r\n    5 minutos de caminata ligera en la cinta o bicicleta estática.\r\n    5 minutos de estiramientos dinámicos.\r\n    5 minutos de movilidad articular.\r\n\r\n    Fase de fuerza y resistencia (60 minutos):\r\n\r\n    5 series de sentadillas con barra (8-10 repeticiones).\r\n    5 series de press de banca con barra (8-10 repeticiones).\r\n    4 series de peso muerto (8-10 repeticiones).\r\n    4 series de dominadas (8-10 repeticiones).\r\n    4 series de curl de bíceps con mancuernas (10-12 repeticiones).\r\n    4 series de extensiones de tríceps con mancuernas (10-12 repeticiones).\r\n    3 series de elevaciones laterales con mancuernas (12-15 repeticiones).\r\n    3 series de curl', 'bajo', 'pecho'),
(3, 'sumo', '    Calentamiento (15 minutos):\r\n\r\n    5 minutos de caminata ligera en la cinta o bicicleta estática.\r\n    5 minutos de estiramientos dinámicos.\r\n    5 minutos de movilidad articular.\r\n\r\n    Fase de fuerza y resistencia (60 minutos):\r\n\r\n    5 series de sentadillas con barra (8-10 repeticiones).\r\n    5 series de press de banca con barra (8-10 repeticiones).\r\n    4 series de peso muerto (8-10 repeticiones).\r\n    4 series de dominadas (8-10 repeticiones).\r\n    4 series de curl de bíceps con mancuernas (10-12 repeticiones).\r\n    4 series de extensiones de tríceps con mancuernas (10-12 repeticiones).\r\n    3 series de elevaciones laterales con mancuernas (12-15 repeticiones).\r\n    3 series de curl', 'bajo', 'gambas'),
(5, 'sentadilla', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ipsum vel dolor commodo, a lacinia orci laoreet. Nullam vitae nulla et turpis tristique pulvinar. Quisque pellentesque nunc ut ipsum posuere, quis vehicula felis ullamcorper. Ut congue, mauris vel viverra posuere, nulla dui hendrerit mauris, at facilisis sapien turpis id velit. Fusce nec dolor eget enim bibendum hendrerit. Nulla eget mauris lacinia, pellentesque arcu nec, gravida libero. Vivamus sed sem vitae ipsum ullamcorper commodo.', 'avanzado', 'piernas'),
(6, 'salto', '    Calentamiento (15 minutos):\r\n\r\n    5 minutos de caminata ligera en la cinta o bicicleta estática.\r\n    5 minutos de estiramientos dinámicos.\r\n    5 minutos de movilidad articular.\r\n\r\n    Fase de fuerza y resistencia (60 minutos):\r\n\r\n    5 series de sentadillas con barra (8-10 repeticiones).\r\n    5 series de press de banca con barra (8-10 repeticiones).\r\n    4 series de peso muerto (8-10 repeticiones).\r\n    4 series de dominadas (8-10 repeticiones).\r\n    4 series de curl de bíceps con mancuernas (10-12 repeticiones).\r\n    4 series de extensiones de tríceps con mancuernas (10-12 repeticiones).\r\n    3 series de elevaciones laterales con mancuernas (12-15 repeticiones).\r\n    3 series de curl', 'bajo', 'gluteo'),
(7, 'gurpis', 'este es un ejercicio en el cual se intenta lograr el mayor alcance...', 'avanzado', 'todo'),
(8, 'saltoo', 'saltoo', 'intermedio', 'saltoo'),
(9, 'saltoo 2', 'saltoo 2', 'intermedio', 'saltoo 2'),
(11, 'saltoo 4', ' saltoo 4 ', 'bajo', 'saltoo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista-ejercicio`
--

CREATE TABLE `lista-ejercicio` (
  `id` int(11) NOT NULL,
  `idEjercicio` int(11) NOT NULL,
  `idLista` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lista-ejercicio`
--

INSERT INTO `lista-ejercicio` (`id`, `idEjercicio`, `idLista`) VALUES
(3, 1, 21),
(62, 1, 24),
(15, 1, 26),
(67, 1, 27),
(4, 2, 20),
(55, 2, 22),
(63, 2, 24),
(66, 2, 27),
(25, 2, 29),
(56, 3, 22),
(53, 3, 23),
(64, 3, 24),
(57, 5, 22),
(65, 5, 24),
(6, 6, 20),
(58, 6, 22),
(39, 7, 25),
(61, 8, 24),
(59, 9, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listaejercicios`
--

CREATE TABLE `listaejercicios` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `imagenLista` varchar(260) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `listaejercicios`
--

INSERT INTO `listaejercicios` (`id`, `titulo`, `fechaCreacion`, `imagenLista`, `idUsuario`) VALUES
(18, 'musculacion', '2023-05-05 06:19:34', 'imagenes-importantes/gym-por-defecto.jpg', 14),
(20, 'brazos', '2023-05-05 06:37:52', 'imagenes-importantes/gym-por-defecto.jpg', 14),
(21, 'piernas', '2023-05-05 07:06:37', '60799480-eb13-11ed-84ef-2778160bb192GIMNASIO-VIRTUAL-ER.jpg', 14),
(22, 'Esta es la primer y unica lista del administrador', '2023-05-06 04:02:10', 'c65e3940-ebc2-11ed-8727-316aeecfedcfDecal Sticker Bodybuilder Muscle Gym Physical Exercise Balance - Etsy.jpg', 25),
(23, 'segunda lista', '2023-05-06 04:28:48', 'imagenes-importantes/gym-por-defecto.jpg', 25),
(24, 'milista a', '2023-05-06 04:37:22', 'imagenes-importantes/gym-por-defecto.jpg', 15),
(25, 'semana por medio', '2023-05-06 06:00:52', 'imagenes-importantes/gym-por-defecto.jpg', 15),
(26, 'basket', '2023-05-06 06:00:59', 'imagenes-importantes/gym-por-defecto.jpg', 15),
(27, 'futbol', '2023-05-06 06:01:05', 'imagenes-importantes/gym-por-defecto.jpg', 15),
(29, 'pantorrillas', '2023-05-06 06:28:57', 'imagenes-importantes/gym-por-defecto.jpg', 25),
(30, 'gemelos', '2023-05-06 06:37:39', 'imagenes-importantes/gym-por-defecto.jpg', 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `progreso`
--

CREATE TABLE `progreso` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idDetalleRutina` int(11) NOT NULL,
  `fechaProgreso` datetime NOT NULL,
  `nivelDificultadAlcanzado` int(11) NOT NULL,
  `numRepeticionesRealizadas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `retroalimentacion`
--

CREATE TABLE `retroalimentacion` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `fechaRetroalimentacion` datetime NOT NULL,
  `descripcion` varchar(260) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `retroalimentacion`
--

INSERT INTO `retroalimentacion` (`id`, `idUsuario`, `fechaRetroalimentacion`, `descripcion`) VALUES
(30, 16, '2023-05-04 06:47:56', 'esta es la primer retroalimentacion creada, se solicita que dejen de tirar con tanta potencia las mancuernas al piso'),
(31, 16, '2023-05-04 06:48:10', 'por favor escuchen al coach'),
(32, 16, '2023-05-04 06:48:25', 'ultima actualizacion del comunicado'),
(33, 15, '2023-05-04 14:34:47', 'dejen de tirar la pesas tan fuerte\r\n'),
(86, 15, '2023-05-04 18:01:33', 'denle guardar a los que les parece un gimnasio muy caro'),
(89, 25, '2023-05-06 03:58:36', 'DEJEN DE TENER TANTAS QUEJAS! YA SE VA A SOLUCIONAR TODOO!'),
(90, 25, '2023-05-08 00:26:45', 'pongan camaras'),
(129, 15, '2023-06-12 22:21:32', 'lo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutina`
--

CREATE TABLE `rutina` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `fechaCreacion` datetime NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `imagenRutina` varchar(260) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rutina`
--

INSERT INTO `rutina` (`id`, `idUsuario`, `fechaCreacion`, `titulo`, `imagenRutina`) VALUES
(11, 25, '2023-05-07 18:13:32', 'rutina 1', 'imagenes-importantes/gym-por-defecto.jpg'),
(12, 25, '2023-05-07 18:13:49', 'rutina 2', 'ea192f70-ed02-11ed-abda-9370598e3c75GIMNASIO-VIRTUAL-ER.jpg'),
(13, 15, '2023-05-07 19:54:06', '1212', 'imagenes-importantes/gym-por-defecto.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rutina-lista`
--

CREATE TABLE `rutina-lista` (
  `id` int(11) NOT NULL,
  `idRutina` int(11) NOT NULL,
  `idLista` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rutina-lista`
--

INSERT INTO `rutina-lista` (`id`, `idRutina`, `idLista`, `idUsuario`) VALUES
(39, 11, 22, 25),
(40, 11, 23, 25),
(42, 12, 23, 25),
(43, 12, 29, 25),
(44, 11, 29, 25),
(45, 11, 30, 25),
(46, 13, 25, 15),
(48, 12, 23, 25),
(49, 12, 22, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seguimientoejercicio`
--

CREATE TABLE `seguimientoejercicio` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idRutina` int(11) NOT NULL,
  `idEjercicio` int(11) NOT NULL,
  `fechaRealizacion` datetime NOT NULL,
  `repeticiones` int(11) NOT NULL,
  `sets` int(11) NOT NULL,
  `pesoUtilizado` double NOT NULL,
  `duracion` int(11) NOT NULL,
  `intensidad` double NOT NULL,
  `caloriasQuemadas` double NOT NULL,
  `frecuenciaCardiaca` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `correoElectronico` varchar(60) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `fechaRegistro` datetime NOT NULL,
  `nivelEntrenamiento` varchar(20) NOT NULL,
  `objetivosEntrenamiento` varchar(260) NOT NULL,
  `imagenPerfil` varchar(260) NOT NULL,
  `sessionId` varchar(260) NOT NULL,
  `rol` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `nombre`, `correoElectronico`, `contraseña`, `fechaRegistro`, `nivelEntrenamiento`, `objetivosEntrenamiento`, `imagenPerfil`, `sessionId`, `rol`) VALUES
(14, 'valentin', 'v@gmail.com', '$2b$10$fanuwh5N3Soww5SE7J9pLuZL5A3xm/6RarR.nQ2oanYD7fGE3iJxG', '2023-05-03 23:48:20', 'avanzado', 'ponerme musculoso', 'fb7ca330-ea0c-11ed-b9a9-edc54cbe4cf3Hombre joven sonriente que hace entrenamiento en gimnasio _ Foto Premium.jpg', 'ScM72HS3y48cQTlRYebeEy9jW1hk6XZU', 'empleado'),
(15, 'a', 'a@gmail.com', '$2b$10$k.TYWhaBdWnUBV5sPHiMj.0CUlGtepBMepihU5M8Aqda6zfzK.gni', '2023-05-03 23:59:23', 'intermedio', 'a', 'imagenes-importantes/noAutenticated.png', 'rxgC-WlBcr3TKw8iKqSaYPTDMdmQXYa3', 'cliente'),
(16, 'fabian', 'f@gmail.com', '$2b$10$394/q4h.Smnh0LJmpogDyOEwJ8W7WP2kWe8k1OmJ1MHA1DmkdU25W', '2023-05-04 04:01:44', 'avanzado', 'cantar', '61837b90-ea30-11ed-868a-c5d506e77695joker-fondos-de-pantall-guason-para-celular-hd-4k-14 _ ImÃ¡genes Bonitas Gratis.jpg', 'tczp-31Muo4TZS8x2WsCteZJ2gPy4gyM', 'cliente'),
(17, 'pia', 'pia@gmail.com', '$2b$10$wAHBgFZiWppPZ8XLUSydNuoarkUZFl4jcWfxQG8034NQL7ibDczX6', '2023-05-04 18:06:54', 'intermedio', 'sacar piernotas', '737fcee0-eaa6-11ed-96f0-d5e159a37a68fe32b6c2-9016-4a18-b128-3e520b90c5b7.jpg', 'snQdLwxJ6Wd5HZoV9hUxcHcowXxrlhJN', 'cliente'),
(25, 'ADMINISTRADOR', 'ADMINISTRADOR@gmail.com', '$2b$10$v1JIA8AX9Jit7il18fItzOYdFubaADVdQ8Vad8B3xS7eqceuVJp0u', '2023-05-06 03:54:05', 'avanzado', 'sin objetivos', 'a4ff8ca0-ebc1-11ed-9640-2185d0365e85Decal Sticker Bodybuilder Muscle Gym Physical Exercise Balance - Etsy.jpg', 'X80vslbgF7MKFLJwJchg8EnPhcURLowJ', 'administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `votosretroalimentacion`
--

CREATE TABLE `votosretroalimentacion` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idRetroalimentacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `votosretroalimentacion`
--

INSERT INTO `votosretroalimentacion` (`id`, `idUsuario`, `idRetroalimentacion`) VALUES
(37, 14, 33),
(38, 14, 86),
(27, 15, 32),
(28, 15, 33),
(46, 15, 86),
(45, 15, 89),
(35, 16, 30),
(34, 16, 31),
(18, 16, 32),
(33, 16, 33),
(32, 16, 86),
(40, 17, 32),
(41, 17, 86),
(47, 25, 86),
(49, 25, 89),
(60, 25, 90);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `detallerutina`
--
ALTER TABLE `detallerutina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idRutina` (`idRutina`,`idEjercicio`),
  ADD KEY `idEjercicio` (`idEjercicio`);

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `lista-ejercicio`
--
ALTER TABLE `lista-ejercicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idEjercicio` (`idEjercicio`,`idLista`),
  ADD KEY `idLista` (`idLista`);

--
-- Indices de la tabla `listaejercicios`
--
ALTER TABLE `listaejercicios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idUsuario_2` (`idUsuario`);

--
-- Indices de la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`,`idDetalleRutina`),
  ADD KEY `idDetalleRutina` (`idDetalleRutina`);

--
-- Indices de la tabla `retroalimentacion`
--
ALTER TABLE `retroalimentacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `rutina-lista`
--
ALTER TABLE `rutina-lista`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idLista` (`idLista`,`idUsuario`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idRutina` (`idRutina`);

--
-- Indices de la tabla `seguimientoejercicio`
--
ALTER TABLE `seguimientoejercicio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`,`idRutina`,`idEjercicio`),
  ADD KEY `idRutina` (`idRutina`),
  ADD KEY `idEjercicio` (`idEjercicio`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `votosretroalimentacion`
--
ALTER TABLE `votosretroalimentacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`,`idRetroalimentacion`),
  ADD KEY `idRetroalimentacion` (`idRetroalimentacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `detallerutina`
--
ALTER TABLE `detallerutina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `lista-ejercicio`
--
ALTER TABLE `lista-ejercicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT de la tabla `listaejercicios`
--
ALTER TABLE `listaejercicios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `progreso`
--
ALTER TABLE `progreso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `retroalimentacion`
--
ALTER TABLE `retroalimentacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT de la tabla `rutina`
--
ALTER TABLE `rutina`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `rutina-lista`
--
ALTER TABLE `rutina-lista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `seguimientoejercicio`
--
ALTER TABLE `seguimientoejercicio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `votosretroalimentacion`
--
ALTER TABLE `votosretroalimentacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detallerutina`
--
ALTER TABLE `detallerutina`
  ADD CONSTRAINT `detallerutina_ibfk_1` FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicio` (`id`),
  ADD CONSTRAINT `detallerutina_ibfk_2` FOREIGN KEY (`idRutina`) REFERENCES `rutina` (`id`);

--
-- Filtros para la tabla `lista-ejercicio`
--
ALTER TABLE `lista-ejercicio`
  ADD CONSTRAINT `lista-ejercicio_ibfk_1` FOREIGN KEY (`idLista`) REFERENCES `listaejercicios` (`id`),
  ADD CONSTRAINT `lista-ejercicio_ibfk_2` FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicio` (`id`);

--
-- Filtros para la tabla `listaejercicios`
--
ALTER TABLE `listaejercicios`
  ADD CONSTRAINT `listaejercicios_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `progreso`
--
ALTER TABLE `progreso`
  ADD CONSTRAINT `progreso_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `progreso_ibfk_2` FOREIGN KEY (`idDetalleRutina`) REFERENCES `detallerutina` (`id`);

--
-- Filtros para la tabla `retroalimentacion`
--
ALTER TABLE `retroalimentacion`
  ADD CONSTRAINT `retroalimentacion_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `rutina`
--
ALTER TABLE `rutina`
  ADD CONSTRAINT `rutina_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`);

--
-- Filtros para la tabla `rutina-lista`
--
ALTER TABLE `rutina-lista`
  ADD CONSTRAINT `rutina-lista_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `rutina-lista_ibfk_2` FOREIGN KEY (`idLista`) REFERENCES `listaejercicios` (`id`),
  ADD CONSTRAINT `rutina-lista_ibfk_3` FOREIGN KEY (`idRutina`) REFERENCES `rutina` (`id`);

--
-- Filtros para la tabla `seguimientoejercicio`
--
ALTER TABLE `seguimientoejercicio`
  ADD CONSTRAINT `seguimientoejercicio_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `seguimientoejercicio_ibfk_2` FOREIGN KEY (`idRutina`) REFERENCES `rutina` (`id`),
  ADD CONSTRAINT `seguimientoejercicio_ibfk_3` FOREIGN KEY (`idEjercicio`) REFERENCES `ejercicio` (`id`);

--
-- Filtros para la tabla `votosretroalimentacion`
--
ALTER TABLE `votosretroalimentacion`
  ADD CONSTRAINT `votosretroalimentacion_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`id`),
  ADD CONSTRAINT `votosretroalimentacion_ibfk_2` FOREIGN KEY (`idRetroalimentacion`) REFERENCES `retroalimentacion` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

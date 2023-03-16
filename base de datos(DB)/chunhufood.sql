-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 19-02-2023 a las 02:00:20
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `chunhufood`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo electronico` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador_password`
--

CREATE TABLE `administrador_password` (
  `id` int(11) NOT NULL,
  `id_administrador` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contraseña` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprador`
--

CREATE TABLE `comprador` (
  `id` int(11) NOT NULL,
  `nombre_apellido` varchar(50) NOT NULL,
  `correo electronico` varchar(100) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprador_eliminado`
--

CREATE TABLE `comprador_eliminado` (
  `id` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comprador_password`
--

CREATE TABLE `comprador_password` (
  `id` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contraseña` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dash_usuarios`
--

CREATE TABLE `dash_usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `hashUser` varchar(25) NOT NULL,
  `fechaRegistro` date NOT NULL,
  `tipo` tinyint(4) NOT NULL DEFAULT 2 COMMENT '1administrador \r\n2usuario'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `dash_usuarios`
--

INSERT INTO `dash_usuarios` (`id`, `nombre`, `apellidos`, `email`, `password`, `hashUser`, `fechaRegistro`, `tipo`) VALUES
(24, 'sdAdministradorsdsdfjheFIUS', 'Uicabsdsd', 'uicab.nahuat.victor@cbta80.edu.mx', '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', 'cfb4033453ac410171613dc69', '2022-05-25', 1),
(26, '3333sfesfejknjk', 'sdsfsefsjihuy', 'uicab.nahuat.victor@cbta80.edu.mxp', '7cbccda65959a4fe629dbdf546ae3ddea9328ae5a53498785f4a27394fe26515', '4c09a1034e3d99fbc7c336681', '2022-06-11', 2),
(28, 'Administrador', 'uicab', 'uicab.nahuat.victor@cbta80.edu.mxppp', '7cbccda65959a4fe629dbdf546ae3ddea9328ae5a53498785f4a27394fe26515', '0c7dbb3ec3ca4fa6a967cbdbc', '2022-06-12', 2),
(31, 'aaddss', 'asdasddsa', 'uicab.nahuat.victor@cbta80.edu.mxasdasdasdasdasdasdasdas', '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', '7fbfe8d7a61eb45dd1c378456', '2022-08-22', 2),
(32, 'manuel uicab', 'nahsua', 'aygshd.37ygduyg@as.ssa.ss', '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', '51eebfbfd2525f5c88e4626d1', '2022-12-06', 2),
(33, 'Victor', 'Nahuat', 'uicab.nahuat.victor@cbta80.edu.mxb', '5e846c64f2db12266e6b658a8e5b5b42cc225419b3ee1fca88acbb181ddfdb52', '27d440e9185124c9c8f9664bd', '2023-02-16', 2),
(34, 'aaa', 'aaa', 'aygshd.37ygduyg@as.ssa.ssdddddd', '6b4a1673b225e8bf5f093b91be8c864427df32ca41b17cc0b82112b8f0185e41', 'aecf4477f06d0373ef2fe5337', '2023-02-19', 2),
(35, 'dsds', 'sdsd', 'aygshd.37ygduyg@as.ssa.ssaa', '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', 'dd76fee505790f67acc4c8adb', '2023-02-19', 2),
(36, 'sss', 'sss', 'aygshd.37ygduyg@sdas.ssa.ss', 'a871c47a7f48a12b38a994e48a9659fab5d6376f3dbce37559bcb617efe8662d', '479994b7efa5c8acfdcbdb3eb', '2023-02-19', 2),
(37, 'qq', 'qqq', 'aygshd.37ygduyg@as.ssa.ssss', '972c7a928892a7429d2f70aeb967db033e33a0ba0b4abae77a500bc02d0d0c36', '444af2c0bd736fdae3ce936f2', '2023-02-19', 2),
(38, 'qqqq', 'qqqq', 'aygshd.37ygduyg@as.ssa.sse', '0ffe1abd1a08215353c233d6e009613e95eec4253832a761af28ff37ac5a150c', '22f842e5d3b7530100f1ecd62', '2023-02-19', 2),
(39, 'sd', 'ds', 'aygshd.37ygduyg@as.ssa.sssd', '0626b633129acbe99b1f52a9112f3c4dd7bbd13c86763764c5a18c0b72d9cf8b', '02d97448772d8933e6413d87d', '2023-02-19', 2),
(40, 'sd', 'sdds', 'aygshd.37ygduyg@as.ssa.sssdds', '0626b633129acbe99b1f52a9112f3c4dd7bbd13c86763764c5a18c0b72d9cf8b', '8dc4d2d202a7132fd192e5ad5', '2023-02-19', 2),
(41, 'sd', 'rrr', 'aygshd.37ygduyg@as.ssa.ssrr', '4209fcf0702262840e93f40abf4df012722838494df760ff04aa1ce529a86f16', 'd250db4cfc7db63f4121a313e', '2023-02-19', 2),
(42, 'rr', 'rr', 'aygshd.37ygduyg@as.ssa.ssddddddrr', '4209fcf0702262840e93f40abf4df012722838494df760ff04aa1ce529a86f16', '5a079ebb02d1c94f193afbcb4', '2023-02-19', 2),
(43, 'ssss', 'sss', 'aygshd.37ygduyg@as.ssa.ssssssss', '0626b633129acbe99b1f52a9112f3c4dd7bbd13c86763764c5a18c0b72d9cf8b', 'e838c9371592e1c1afede38ff', '2023-02-19', 2),
(44, 'sdsd', 'sdsee', 'uicab.nahuat.victor@cbta80.edu.mxee', '61be55a8e2f6b4e172338bddf184d6dbee29c98853e0a0485ecee7f27b9af0b4', 'b8fd2b1a91a33222ef7c72933', '2023-02-19', 2),
(45, 'dd', 'dd', 'aygshd.37ygduyg@as.ssa.ssas', '5bf8aa57fc5a6bc547decf1cc6db63f10deb55a3c6c5df497d631fb3d95e1abf', '7934048f0dd9e9aa3a1bbd7ea', '2023-02-19', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos_productos`
--

CREATE TABLE `pedidos_productos` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id` int(11) NOT NULL,
  `producto` varchar(50) NOT NULL,
  `fecha_publicacion` datetime NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `id_categoria` int(100) NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `precio_producto` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_calificacion`
--

CREATE TABLE `publicacion_calificacion` (
  `id` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  `calificacion` tinyint(4) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_eliminado`
--

CREATE TABLE `publicacion_eliminado` (
  `id` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_imagen`
--

CREATE TABLE `publicacion_imagen` (
  `id` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor`
--

CREATE TABLE `vendedor` (
  `id` int(11) NOT NULL,
  `nombre_apellido` varchar(50) NOT NULL,
  `correo electronico` varchar(100) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor_calificacion`
--

CREATE TABLE `vendedor_calificacion` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `calificacion` tinyint(4) NOT NULL,
  `fecha_registro` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor_eliminados`
--

CREATE TABLE `vendedor_eliminados` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `fecha` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor_password`
--

CREATE TABLE `vendedor_password` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `contraseña` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vendedor_publicacion`
--

CREATE TABLE `vendedor_publicacion` (
  `id` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `id_publicacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo electronico` (`correo electronico`);

--
-- Indices de la tabla `administrador_password`
--
ALTER TABLE `administrador_password`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contraseña` (`contraseña`),
  ADD KEY `id_administrador` (`id_administrador`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comprador`
--
ALTER TABLE `comprador`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo electronico` (`correo electronico`);

--
-- Indices de la tabla `comprador_eliminado`
--
ALTER TABLE `comprador_eliminado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_comprador` (`id_comprador`);

--
-- Indices de la tabla `comprador_password`
--
ALTER TABLE `comprador_password`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contraseña` (`contraseña`),
  ADD KEY `id_comprador` (`id_comprador`);

--
-- Indices de la tabla `dash_usuarios`
--
ALTER TABLE `dash_usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_comprador` (`id_comprador`);

--
-- Indices de la tabla `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pedido` (`id_pedido`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `publicacion_calificacion`
--
ALTER TABLE `publicacion_calificacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `publicacion_eliminado`
--
ALTER TABLE `publicacion_eliminado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `publicacion_imagen`
--
ALTER TABLE `publicacion_imagen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo electronico` (`correo electronico`);

--
-- Indices de la tabla `vendedor_calificacion`
--
ALTER TABLE `vendedor_calificacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_vendedor` (`id_vendedor`);

--
-- Indices de la tabla `vendedor_eliminados`
--
ALTER TABLE `vendedor_eliminados`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_vendedor` (`id_vendedor`);

--
-- Indices de la tabla `vendedor_password`
--
ALTER TABLE `vendedor_password`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `contraseña` (`contraseña`),
  ADD KEY `id_vendedor` (`id_vendedor`);

--
-- Indices de la tabla `vendedor_publicacion`
--
ALTER TABLE `vendedor_publicacion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_vendedor` (`id_vendedor`),
  ADD KEY `id_publicacion` (`id_publicacion`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `administrador_password`
--
ALTER TABLE `administrador_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comprador`
--
ALTER TABLE `comprador`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comprador_eliminado`
--
ALTER TABLE `comprador_eliminado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `comprador_password`
--
ALTER TABLE `comprador_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `dash_usuarios`
--
ALTER TABLE `dash_usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion_calificacion`
--
ALTER TABLE `publicacion_calificacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion_eliminado`
--
ALTER TABLE `publicacion_eliminado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion_imagen`
--
ALTER TABLE `publicacion_imagen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor`
--
ALTER TABLE `vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor_calificacion`
--
ALTER TABLE `vendedor_calificacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor_eliminados`
--
ALTER TABLE `vendedor_eliminados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor_password`
--
ALTER TABLE `vendedor_password`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `vendedor_publicacion`
--
ALTER TABLE `vendedor_publicacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `administrador_password`
--
ALTER TABLE `administrador_password`
  ADD CONSTRAINT `administrador_password_ibfk_1` FOREIGN KEY (`id_administrador`) REFERENCES `administrador` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `comprador_eliminado`
--
ALTER TABLE `comprador_eliminado`
  ADD CONSTRAINT `comprador_eliminado_ibfk_1` FOREIGN KEY (`id_comprador`) REFERENCES `comprador` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `comprador_password`
--
ALTER TABLE `comprador_password`
  ADD CONSTRAINT `comprador_password_ibfk_1` FOREIGN KEY (`id_comprador`) REFERENCES `comprador` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_comprador`) REFERENCES `comprador` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `pedidos_productos`
--
ALTER TABLE `pedidos_productos`
  ADD CONSTRAINT `pedidos_productos_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicacion_calificacion`
--
ALTER TABLE `publicacion_calificacion`
  ADD CONSTRAINT `publicacion_calificacion_ibfk_1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicacion_eliminado`
--
ALTER TABLE `publicacion_eliminado`
  ADD CONSTRAINT `publicacion_eliminado_ibfk_1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicacion_imagen`
--
ALTER TABLE `publicacion_imagen`
  ADD CONSTRAINT `publicacion_imagen_ibfk_1` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vendedor_calificacion`
--
ALTER TABLE `vendedor_calificacion`
  ADD CONSTRAINT `vendedor_calificacion_ibfk_1` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vendedor_eliminados`
--
ALTER TABLE `vendedor_eliminados`
  ADD CONSTRAINT `vendedor_eliminados_ibfk_1` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vendedor_password`
--
ALTER TABLE `vendedor_password`
  ADD CONSTRAINT `vendedor_password_ibfk_1` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `vendedor_publicacion`
--
ALTER TABLE `vendedor_publicacion`
  ADD CONSTRAINT `vendedor_publicacion_ibfk_1` FOREIGN KEY (`id_vendedor`) REFERENCES `vendedor` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `vendedor_publicacion_ibfk_2` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

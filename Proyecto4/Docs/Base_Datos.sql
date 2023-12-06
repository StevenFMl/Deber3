--
-- Estructura de tabla para la tabla `remotos`
--

CREATE TABLE `remotos` (
  `ID_Moto` int(11) NOT NULL,
  `Marca` varchar(50) NOT NULL,
  `Modelo` varchar(50) NOT NULL,
  `Ano` int(11) NOT NULL,
  `Color` varchar(50) NOT NULL,
  `Precio` decimal(10,0) NOT NULL,
  `Estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `remotos`
--

INSERT INTO `remotos` (`ID_Moto`, `Marca`, `Modelo`, `Ano`, `Color`, `Precio`, `Estado`) VALUES
(1, 'Zuzuki', 'GN-125 ', 2020, 'Azul', '1800', 'Nueva'),
(8, 'Honda', 'RTE', 2023, 'Azul', '1233', 'Usada'),
(24, '', '', 0, '', '0', ''),
(25, '', '', 0, '', '0', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `UsuarioId` int(11) NOT NULL,
  `Cedula` varchar(17) NOT NULL,
  `Nombres` varchar(100) NOT NULL,
  `Apellidos` varchar(100) NOT NULL,
  `Telefono` varchar(17) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `Contrasenia` text NOT NULL,
  `Rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`UsuarioId`, `Cedula`, `Nombres`, `Apellidos`, `Telefono`, `Correo`, `Contrasenia`, `Rol`) VALUES
(1, '1050356672', 'Steven Alexander', 'Montenegro Flores', '0985004757', 'stevenflores2011@hotmail.com', '123', 'Administrador'),
(3, '2300357478', 'David', 'Echeverria', '0985004564', 'david_23@gmail.com', '1234', 'Vendedor'),
(4, '42342342', 'xcvxcv', 'sdfsdf', '32423423', 'dsfsddsf@gmail.com', '123', 'Cliente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `remotos`
--
ALTER TABLE `remotos`
  ADD PRIMARY KEY (`ID_Moto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`UsuarioId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `remotos`
--
ALTER TABLE `remotos`
  MODIFY `ID_Moto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `UsuarioId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

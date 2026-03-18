-- ======================================================
-- 1. USUARIOS (30 Registros) - CORREGIDO
-- ======================================================
INSERT INTO USUARIOS (ROL, PASSWORD_HASH, CREAR_EVENTO, NOMBRE, APELLIDO, EMAIL, BIOGRAFIA, FOTO, ACTIVO, EVENTOS_COMPLETADOS)
VALUES 
    ('ADMIN', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', TRUE, 'Pepe', 'Garcia', 'pepe@bluecrew.com', 'Administrador', 'pepe.jpg', TRUE, 5),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Ana', 'Lopez', 'ana@gmail.com', 'Voluntaria', 'ana.jpg', TRUE, 4),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Carlos', 'Ruiz', 'carlos@gmail.com', 'Buceador', 'carlos.jpg', TRUE, 5),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Elena', 'Mora', 'elena@yahoo.es', 'Bióloga', 'elena.jpg', TRUE, 1),
    ('ADMIN', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', TRUE, 'Marta', 'Sanz', 'marta@bluecrew.com', 'Staff', 'marta.jpg', TRUE, 0),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Javi', 'Pons', 'javi@gmail.com', 'Surfista', 'u6.jpg', TRUE, 4),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Sofia', 'C.', 'sofi@gmail.com', 'Fotógrafa', 'u7.jpg', TRUE, 15),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Luis', 'Gómez', 'luis@gmail.com', 'Estudiante', 'u8.jpg', TRUE, 1),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Maria', 'P.', 'maria@gmail.com', 'Eco-activista', 'u9.jpg', TRUE, 10),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Hugo', 'S.', 'hugo@gmail.com', 'Pescador recreativo', 'u10.jpg', TRUE, 6),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Lucia', 'N.', 'lucia@gmail.com', 'Amante del mar', 'u11.jpg', TRUE, 3),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Pablo', 'V.', 'pablo@gmail.com', 'Ingeniero', 'u12.jpg', TRUE, 0),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Sara', 'L.', 'sara@gmail.com', 'Voluntaria', 'u13.jpg', TRUE, 7),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Dani', 'M.', 'dani@gmail.com', 'Kayaker', 'u14.jpg', TRUE, 9),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Alba', 'R.', 'alba@gmail.com', 'Bióloga', 'u15.jpg', TRUE, 14),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Raul', 'T.', 'raul@gmail.com', 'Vecino local', 'u16.jpg', TRUE, 2),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Nora', 'F.', 'nora@gmail.com', 'Retirada', 'u17.jpg', TRUE, 20),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Iker', 'J.', 'iker@gmail.com', 'Estudiante', 'u18.jpg', TRUE, 5),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Clara', 'E.', 'clara@gmail.com', 'Educadora', 'u19.jpg', TRUE, 11),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Marc', 'B.', 'marc@gmail.com', 'Navegante', 'u20.jpg', TRUE, 8),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Julia', 'W.', 'julia@gmail.com', 'Científica', 'u21.jpg', TRUE, 13),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Leo', 'Q.', 'leo@gmail.com', 'Surfista', 'u22.jpg', TRUE, 4),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Inma', 'H.', 'inma@gmail.com', 'Voluntaria', 'u23.jpg', TRUE, 6),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Paco', 'X.', 'paco@gmail.com', 'Jubilado', 'u24.jpg', TRUE, 30),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Eva', 'Z.', 'eva@gmail.com', 'Periodista', 'u25.jpg', TRUE, 5),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Alex', 'Y.', 'alex@gmail.com', 'Voluntario', 'u26.jpg', TRUE, 1),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Rocio', 'A.', 'rocio@gmail.com', 'Buceadora', 'u27.jpg', TRUE, 18),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Gael', 'I.', 'gael@gmail.com', 'Estudiante', 'u28.jpg', TRUE, 2),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Noa', 'K.', 'noa@gmail.com', 'Activista', 'u29.jpg', TRUE, 9),
    ('USER', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', FALSE, 'Bruno', 'L.', 'bruno@gmail.com', 'Marinero', 'u30.jpg', TRUE, 11);

-- ======================================================
-- 2. ORGANIZACIONES
-- ======================================================
INSERT INTO ORGANIZACIONES (ID_APROBADO_POR, NOMBRE_ORGANIZACION, DESCRIPCION, SITIO_WEB, LOGO, PASSWORD_HASH, TELEFONO, EMAIL, ESTADO_APROBACION, FECHA_APROBACION)
VALUES 
    (1, 'EcoMundo', 'ONG Medio Ambiente', 'www.ecomundo.org', 'aquapure.png', '$2a$08$w8YA1SgyKTLh2AWyYC4OEOUy.zorUciUJbC7zetBKfmNAdZ0nEtiC', '6001', 'c1@eco.org', 'APROBADO', CURRENT_TIMESTAMP),
    (NULL, 'VerdeAzul', 'Protectores océano', 'www.verdeazul.es', 'bluemarine.png', 'h2', '6002', 'c2@va.es', 'PENDIENTE', NULL),
    (1, 'Ríos Limpios', 'Cuencas fluviales', 'www.rios.org', 'ecowave.png', 'h3', '6003', 'c3@rios.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Mar Vivo', 'Protección coralina', 'www.marvivo.org', 'globalcoast.png', 'h4', '6004', 'c4@mv.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Posidonia SOS', 'Praderas marinas', 'www.posidonia.es', 'oceandefenders.png', 'h5', '6005', 'c5@psos.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Delfín Libre', 'Rescate cetáceos', 'www.delfin.org', 'oceanhope.png', 'h6', '6006', 'c6@dl.org', 'APROBADO', CURRENT_TIMESTAMP),
    (NULL, 'Costas Sanas', 'Gestión litoral', 'www.costas.es', 'oceanic.png', 'h7', '6007', 'c7@cs.es', 'PENDIENTE', NULL),
    (1, 'Blue Planet', 'Acción global', 'www.bluep.org', 'oceanoverde.png', 'h8', '6008', 'c8@bp.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'AquaGuard', 'Vigilancia ríos', 'www.aquag.es', 'reefpatrol.png', 'h9', '6009', 'c9@ag.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'SalvaTortugas', 'Nidificación', 'www.tortu.org', 'seagrass.png', 'h10', '6010', 'c10@tortu.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'OceanCare', 'Ruido submarino', 'www.oceanc.org', 'sealife.png', 'h11', '6011', 'c11@oc.org', 'APROBADO', CURRENT_TIMESTAMP),
    (NULL, 'H2O Consciente', 'Uso agua', 'www.h2o.es', 'visionmar.png', 'h12', '6012', 'c12@h2o.es', 'PENDIENTE', NULL),
    (1, 'Planeta Azul', 'Educación marina', 'www.pazul.org', 'l13.png', 'h13', '6013', 'c13@pa.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'WaveWatch', 'Observación oleaje', 'www.wavew.org', 'l14.png', 'h14', '6014', 'c14@ww.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'DeepClean', 'Buceo basura', 'www.deepc.org', 'l15.png', 'h15', '6015', 'c15@dc.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Ecosistemas Marinos', 'Biodiversidad', 'www.ecos.org', 'l16.png', 'h16', '6016', 'c16@ecos.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Guardacostas Vol.', 'Vigilancia', 'www.gcv.org', 'l17.png', 'h17', '6017', 'c17@gcv.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'BioMar', 'Laboratorio abierto', 'www.biomar.es', 'l18.png', 'h18', '6018', 'c18@bm.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Riberas Verdes', 'Reforestación río', 'www.riberas.org', 'l19.png', 'h19', '6019', 'c19@rv.org', 'APROBADO', CURRENT_TIMESTAMP),
    (NULL, 'Marea Baja', 'Arte reciclado', 'www.mareab.es', 'l20.png', 'h20', '6020', 'c20@mb.es', 'PENDIENTE', NULL),
    (1, 'Oceanic Shield', 'Defensa especies', 'www.oshield.org', 'l21.png', 'h21', '6021', 'c21@os.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Pesca Sostenible', 'Artes tradicionales', 'www.pescasos.org', 'l22.png', 'h22', '6022', 'c22@ps.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Plástico Cero', 'Eliminación PET', 'www.pzero.org', 'l23.png', 'h23', '6023', 'c23@pz.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Humedales Vivos', 'Conservación lagos', 'www.humev.es', 'l24.png', 'h24', '6024', 'c24@hv.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Coral Restoration', 'Viveros coral', 'www.coralr.org', 'l25.png', 'h25', '6025', 'c25@cr.org', 'APROBADO', CURRENT_TIMESTAMP),
    (NULL, 'Vientos de Mar', 'Energía limpia', 'www.vientos.es', 'l26.png', 'h26', '6026', 'c26@vm.es', 'PENDIENTE', NULL),
    (1, 'Aventura Eco', 'Turismo responsable', 'www.aeco.es', 'l27.png', 'h27', '6027', 'c27@ae.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Salinas Libres', 'Entornos salinos', 'www.salinas.org', 'l28.png', 'h28', '6028', 'c28@sl.org', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Gota a Gota', 'Ahorro hídrico', 'www.gota.es', 'l29.png', 'h29', '6029', 'c29@gota.es', 'APROBADO', CURRENT_TIMESTAMP),
    (1, 'Blue Frontier', 'Investigación profunda', 'www.bluef.org', 'l30.png', 'h30', '6030', 'c30@bf.org', 'APROBADO', CURRENT_TIMESTAMP);

-- ======================================================
-- 3. CATEGORIAS
-- ======================================================
INSERT INTO CATEGORIAS (ID_CREADOR, NOMBRE_CATEGORIA, DESCRIPCION, APROBADO, FECHA_CREACION, FECHA_APROBACION)
VALUES 
    (1, 'Limpieza de Playas', 'Recogida de residuos', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Reforestación', 'Plantación', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Limpieza de Ríos', 'Retirada plásticos cauce', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Rescate Fauna', 'Asistencia animales', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Buceo Ecosostenible', 'Limpieza fondos', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Microplásticos', 'Muestreo científico', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Dunas', 'Protección litoral', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Talleres Educativos', 'Concienciación', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Avistamiento', 'Censo especies', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Posidonia', 'Siembra y cuidado', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Reciclaje Creativo', 'Taller arte mar', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Analítica Aguas', 'Calidad química', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Nidificación', 'Vigilancia tortugas', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Invasoras', 'Retirada especies extrañas', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Arrecifes', 'Estructuras artificiales', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Fotografía Eco', 'Documentación', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Kayak Clean', 'Limpieza en kayak', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Salinas', 'Biodiversidad salina', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Aves Marinas', 'Anillamiento', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Pesca Fantasma', 'Retirada redes', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Manglares/Marismas', 'Cuidado humedales', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Senderismo Azul', 'Rutas por costa', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Paleontología Mar', 'Fósiles costeros', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Energía Marina', 'Divulgación mareas', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Cocina Sostenible', 'Algas y pescado local', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Patrimonio Marítimo', 'Faros y barcos', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Erosión', 'Muros naturales', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Cine Fórum Mar', 'Documentales', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Navegación Vela', 'Transporte limpio', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 'Bio-Construcción', 'Materiales marinos', TRUE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- ======================================================
-- 4. EVENTOS 
-- ======================================================
INSERT INTO EVENTOS (ID_CATEGORIA, ID_USER, ID_ORGANIZACION, TITULO, DESCRIPCION, IMAGEN, FECHA_INICIO, FECHA_FIN, UBICACION, ESTADO, PARTICIPANTES, FINALIZADO, MATERIAL_NECESARIO)
VALUES 
    (1, NULL, 1, 'Playa Postiguet', 'Limpieza masiva', 'playa-postiguet.jpg', '2026-06-01 09:00', '2026-06-01 13:00', 'Alicante', 'APROBADO', 50, FALSE, 'Bolsas'),
    (2, 3, NULL, 'Pinos en Costa', 'Reforestación', 'pinos.jpg', '2026-10-15 08:30', '2026-10-15 14:00', 'Valencia', 'PENDIENTE', 20, FALSE, 'Azada'),
    (3, 3, NULL, 'Río Segura Limpio', 'Sacamos basura', 'saneamiento-rio.jpg', '2026-07-05 09:00', '2026-07-05 14:00', 'Murcia', 'APROBADO', 100, FALSE, 'Botas'),
    (5, 1, NULL, 'Fondo de Tabarca', 'Buceo basura', 'buceo.jpg', '2026-08-10 08:00', '2026-08-10 12:00', 'Tabarca', 'APROBADO', 15, FALSE, 'Equipo buceo'),
    (6, 4, NULL, 'Microplásticos Gandía', 'Estudio arena', 'microplasticos.jpg', '2026-06-20 10:00', '2026-06-20 13:00', 'Gandía', 'APROBADO', 30, FALSE, 'Pinzas'),
    (10, 5, NULL, 'Siembra Posidonia', 'Restauración', 'posidonia.jpg', '2026-09-01 09:00', '2026-09-01 15:00', 'Denia', 'APROBADO', 10, FALSE, 'Neopreno'),
    (13, 3, NULL, 'Vigilia Tortugas', 'Noche de nidos', 'vigilia-tortuga.jpg', '2026-07-20 22:00', '2026-07-21 06:00', 'Jávea', 'APROBADO', 8, FALSE, 'Linterna roja'),
    (17, 3, NULL, 'Kayak vs Plástico', 'Ruta por acantilados', 'kayak.jpg', '2026-06-15 10:00', '2026-06-15 13:00', 'Calpe', 'APROBADO', 20, FALSE, 'Kayak'),
    (1, 1, NULL, 'Playa Malvarrosa', 'Gran recogida', 'recogida.jpg', '2026-05-10 09:00', '2026-05-10 13:00', 'Valencia', 'APROBADO', 200, FALSE, 'Guantes'),
    (8, 5, NULL, 'Charla Escolar Mar', 'Concienciación', 'corales.jpg', '2026-04-12 11:00', '2026-04-12 13:00', 'Altea', 'APROBADO', 40, FALSE, 'Ganas'),
    (1, 1, NULL, 'Cala Ambolo', 'Limpieza difícil', 'limpieza-dificil.jpg', '2026-07-12 09:00', '2026-07-12 14:00', 'Jávea', 'APROBADO', 15, FALSE, 'Cuerdas'),
    (3, 4, NULL, 'Río Júcar Eco', 'Saneamiento', 'rio-segura.jpg', '2026-08-22 09:00', '2026-08-22 13:00', 'Cullera', 'APROBADO', 35, FALSE, 'Rastrillos'),
    (5, 3, NULL, 'Puerto de Campomanes', 'Retirada redes', 'retirada-redes.jpg', '2026-09-10 08:30', '2026-09-10 12:00', 'Altea', 'APROBADO', 12, FALSE, 'Cuchillo buzo'),
    (14, 1, NULL, 'Adiós Carpobrotus', 'Especie invasora', 'carpobrotus.jpg', '2026-05-30 09:00', '2026-05-30 13:00', 'Alicante', 'APROBADO', 25, FALSE, 'Azada'),
    (20, 5, NULL, 'Redes Fantasma', 'Limpieza profunda', 'redes-fantasma.jpg', '2026-10-02 08:00', '2026-10-02 14:00', 'Benidorm', 'APROBADO', 10, FALSE, 'Globo elevador'),
    (7, 3, NULL, 'Dunas de Guardamar', 'Vallado protector', 'dunas.jpg', '2026-04-15 09:00', '2026-04-15 14:00', 'Guardamar', 'APROBADO', 15, FALSE, 'Martillo'),
    (9, 6, NULL, 'Censo Aves Marinas', 'Observación', 'censo-aves.jpg', '2026-11-05 08:00', '2026-11-05 11:00', 'Santa Pola', 'APROBADO', 10, FALSE, 'Prismáticos'),
    (11, 7, NULL, 'Arte con Plástico', 'Taller playa', 'arte-plastico.jpg', '2026-06-25 18:00', '2026-06-25 20:30', 'Villajoyosa', 'APROBADO', 20, FALSE, 'Pegamento'),
    (12, 1, NULL, 'Test Nitratos Mar', 'Análisis agua', 'plastico-peces.jpg', '2026-07-02 10:00', '2026-07-02 12:00', 'Torrevieja', 'APROBADO', 5, FALSE, 'Tubos ensayo'),
    (1, 2, NULL, 'Playa de los Locos', 'Recogida PET', 'playa-locos.jpg', '2026-08-15 09:00', '2026-08-15 13:00', 'Torrevieja', 'APROBADO', 40, TRUE, 'Sacos'),
    (19, 3, NULL, 'Anillamiento Charranes', 'Estudio aves', 'charranes.jpg', '2026-05-20 07:00', '2026-05-20 11:00', 'Elche', 'APROBADO', 6, FALSE, 'Cuaderno'),
    (4, 5, NULL, 'Delfín Varado Simulacro', 'Formación', 'delfines.jpg', '2026-04-25 10:00', '2026-04-25 18:00', 'Valencia', 'APROBADO', 50, FALSE, 'Toallas'),
    (21, 1, NULL, 'Marjal Pego-Oliva', 'Limpieza carrizal', 'carrizal.jpg', '2026-09-15 09:00', '2026-09-15 13:00', 'Pego', 'APROBADO', 30, FALSE, 'Botas'),
    (17, 8, NULL, 'Ruta Kayak Limpio', 'Cala Granadella', 'kayak.jpg', '2026-07-28 09:30', '2026-07-28 13:00', 'Jávea', 'APROBADO', 15, TRUE, 'Kayak'),
    (1, 1, NULL, 'Playa San Juan', 'Limpieza colillas', 'colillas.jpg', '2026-06-05 18:00', '2026-06-05 21:00', 'Alicante', 'APROBADO', 60, FALSE, 'Cribas'),
    (25, 9, NULL, 'Cocina con Algas', 'Sostenibilidad', 'algas.jpg', '2026-11-10 11:00', '2026-11-10 14:00', 'Dénia', 'APROBADO', 12, FALSE, 'Delantal'),
    (22, 1, NULL, 'Senderismo Costero', 'Ruta Faro Albir', 'senderismo.jpg', '2026-03-20 09:00', '2026-03-20 12:00', 'Alfaz', 'APROBADO', 25, FALSE, 'Botas'),
    (1, 3, NULL, 'Cala del Moraig', 'Limpieza vertical', 'cala-moraig.jpg', '2026-08-01 08:30', '2026-08-01 13:00', 'Benitachell', 'APROBADO', 10, FALSE, 'Arnés'),
    (3, 4, NULL, 'Desembocadura Ebro', 'Retirada plásticos', 'ebro.jpg', '2026-10-10 09:00', '2026-10-10 15:00', 'Deltebre', 'APROBADO', 80, FALSE, 'Sacos'),
    (15, 5, NULL, 'Arrecife Biorock', 'Instalación', 'arrecife.jpg', '2026-11-20 08:00', '2026-11-20 16:00', 'Calpe', 'APROBADO', 6, TRUE, 'Equipamiento');

-- ======================================================
-- 5. NOTICIAS
-- ======================================================
INSERT INTO NOTICIAS (ID_AUTOR, ID_CATEGORIA, TITULO, IMAGEN, DESCRIPCION, ESTADO_APROBACION_NOTICIA, ESTADO_VISIBILIDAD, CITA_DESTACADA)
VALUES 
    (1, 1, 'Delfines en Costa', 'delfines.jpg',
     'Un grupo de delfines mulares fue visto ayer muy cerca de la costa de Altea, lo que dio una gran sorpresa a todas las personas que estaban navegando por la zona en ese momento. Los animales se mostraron muy activos y juguetones, saltando fuera del agua y nadando junto a algunas embarcaciones pequeñas. Este tipo de encuentros no son muy comunes tan cerca de la orilla, por lo que el avistamiento causó mucha alegría entre los navegantes locales, quienes pudieron grabarlos y sacarles fotos desde una distancia segura mientras disfrutaban del espectáculo natural.
        Los expertos de la Universidad de Alicante han estudiado este suceso y explican que hay una razón principal para que esto ocurra de forma tan llamativa. Al haber menos barcos de recreo moviéndose por el mar durante los días de diario, el agua está mucho más tranquila y hay menos ruido bajo la superficie. Esto hace que los delfines se sientan más cómodos y se atrevan a acercarse a menos de doscientas millas de la playa. Su objetivo principal al acercarse tanto es buscar comida, ya que en estas aguas más calmadas es mucho más fácil encontrar bancos de peces para alimentarse sin que el ruido de los motores les moleste o les asuste.
        Es importante recordar que, aunque ver a estos animales tan de cerca es una experiencia maravillosa, debemos ser muy respetuosos con su entorno natural. Los biólogos recomiendan no intentar bañarse con ellos ni perseguirlos con las lanchas, ya que son animales salvajes y necesitan su espacio para seguir viviendo tranquilos en nuestras costas. Este tipo de noticias nos demuestran que, si cuidamos el mar y reducimos un poco nuestra actividad en momentos clave, la naturaleza puede volver a lugares donde antes no se dejaba ver con tanta frecuencia.',
     'APROBADO', TRUE, 'La fauna marina es nuestra mayor riqueza.'),
    
    (2, 2, 'Plástico en Peces', 'plastico-peces.jpg', 'Un nuevo estudio realizado por los científicos de la Fundación Oceanográfica ha dado a conocer unos resultados que generan mucha preocupación sobre el estado de nuestras costas y la fauna marina. La investigación se ha centrado en analizar especies de pescado que son muy comunes en nuestras lonjas y mesas, como son la dorada y el sargo. El objetivo era comprobar si estos animales están comiendo, sin querer, pequeños trozos de plástico que flotan en el mar. Tras un trabajo muy intenso en el que se examinaron con detalle más de quinientas muestras de diferentes ejemplares, los datos confirman que el problema es real y bastante serio.
        Los resultados determinaron que el 30% de los peces analizados tenían partículas sintéticas en su sistema digestivo. Esto significa que, de cada diez peces que nadan en nuestras aguas cercanas, al menos tres ya han ingerido microplásticos. Estos materiales son trozos de plástico tan pequeños que a veces son casi invisibles a simple vista, y llegan al mar cuando la basura que tiramos, como bolsas o botellas, se va rompiendo poco a poco por el efecto del sol y las olas. Como estos peces buscan su comida en el fondo marino o entre las rocas, acaban tragando estos residuos por error, pensando que son alimento natural.
        Este descubrimiento plantea un desafío muy urgente para todos nosotros, ya que no solo afecta a la supervivencia de los animales, sino que también tiene un impacto directo en la salud pública. Al ser especies que las personas consumimos habitualmente, es necesario empezar a tomar medidas más estrictas en la gestión de los residuos de nuestras ciudades. Si no mejoramos la limpieza de nuestras playas y reducimos el uso de plásticos de un solo uso, el problema seguirá creciendo. Los expertos insisten en que todavía estamos a tiempo de cambiar la situación si nos esforzamos en reciclar mejor y en evitar que la basura llegue a nuestros ríos y mares.',
     'APROBADO', TRUE, 'Somos lo que comen los peces.'),
    
    (3, 3, 'Nueva Ley Costas', 'ley-costas.jpg', 'Se han propuesto cambios muy importantes en las leyes que cuidan nuestras costas para poner un freno definitivo a la construcción excesiva de edificios justo al lado del mar. Durante mucho tiempo, se han levantado demasiadas casas y hoteles en la misma orilla de la playa, lo que ha provocado que muchos paisajes naturales desaparezcan bajo el cemento. Con esta nueva reforma, lo que se busca es que la zona donde está prohibido construir sea mucho más amplia. De esta manera, se deja un espacio libre de edificios entre el agua y las viviendas, asegurando que nuestras costas no sigan perdiendo su esencia natural por la urbanización descontrolada.
        Uno de los puntos más destacados de esta propuesta es la protección de las dunas de arena. Muchas veces pensamos que las dunas son solo montones de arena sin importancia, pero en realidad funcionan como un escudo protector para todos nosotros. Si permitimos que estos ecosistemas tengan el espacio suficiente para existir y desarrollarse, actuarán como barreras naturales que nos defenderán frente al aumento del nivel del mar que los expertos esperan para la próxima década. Al no haber edificios que estorben, la arena puede moverse de forma natural y evitar que las olas lleguen con demasiada fuerza a las zonas donde vive la gente, reduciendo mucho el riesgo de inundaciones durante los temporales.
        Además, estas medidas no solo sirven para protegernos de las tormentas, sino que también ayudan a que nuestras playas sean lugares mucho más agradables y saludables. Al dar un respiro al litoral y alejar las construcciones de la primera línea, permitimos que la vegetación y los animales propios de la zona vuelvan a recuperar su sitio. Es un paso necesario para entender que el mar necesita espacio para respirar y que, si cuidamos hoy la distancia entre el agua y el cemento, estaremos garantizando que las futuras generaciones también puedan disfrutar de playas anchas y seguras. Es, en definitiva, una apuesta por un futuro donde la seguridad de nuestras ciudades y la salud de la naturaleza vayan de la mano.',
     'PENDIENTE', TRUE, 'Proteger hoy para tener mañana.'),
    
    (4, 1, 'Éxito en Postiguet', 'playa-postiguet.jpg', 'Más de doscientos voluntarios se reunieron el pasado domingo en la playa del Postiguet para participar en una jornada de limpieza que resultó ser un gran éxito de participación. Desde primera hora de la mañana, familias, jóvenes y vecinos de todas las edades se pusieron manos a la obra para retirar la basura que se acumula en la arena y entre las rocas de esta zona tan querida de la ciudad. Gracias al esfuerzo de todas estas personas, se lograron recoger nada menos que quinientos kilogramos de residuos, una cantidad impresionante que demuestra lo necesario que es realizar este tipo de acciones de forma periódica para mantener nuestro entorno en buen estado.
        Al revisar lo que se había recogido, los organizadores se encontraron con objetos de todo tipo que no deberían estar en el mar ni en la arena. Entre los restos más comunes aparecieron redes de pesca abandonadas que son muy peligrosas para los animales marinos, muchísimos envases de plástico de un solo uso y, lo que más sorprendió a los asistentes, restos de materiales de construcción. Estos residuos no solo ensucian el paisaje, sino que tardan muchísimos años en desaparecer y dañan seriamente el ecosistema de nuestra costa. Ver tanta basura junta sirvió para que los voluntarios tomaran conciencia de la gran cantidad de desechos que generamos casi sin darnos cuenta cada día.
        Esta jornada ha dejado claro que, aunque la limpieza es fundamental, lo más importante es seguir trabajando en campañas de educación y concienciación para todos los ciudadanos. Al ser una playa urbana con tanto movimiento, es muy fácil que la basura acabe en el agua si no tenemos cuidado. Los expertos que coordinaron la actividad recordaron que la mejor basura es la que no se produce y animaron a todo el mundo a reducir el uso de plásticos y a utilizar siempre las papeleras. Es un recordatorio de que cuidar la playa del Postiguet es tarea de todos, y que con pequeños gestos diarios podemos conseguir que el mar esté mucho más limpio para el disfrute de las futuras generaciones.',
     'APROBADO', TRUE, 'Cada gramo cuenta en la limpieza.'),
    
    (5, 4, 'Tortugas Nacen', 'tortugas.jpg', 'Una playa de Jávea ha vivido un momento histórico y muy emocionante que ha dejado una huella imborrable en todos los que pudieron verlo. Decenas de pequeñas tortugas boba, conocidas científicamente como Caretta caretta, rompieron finalmente el cascarón de sus huevos y emprendieron su primer viaje hacia las aguas del mar Mediterráneo. Todo el proceso ocurrió bajo la atenta mirada y supervisión de biólogos marinos expertos, quienes se encargaron de vigilar que el camino de las pequeñas tortugas desde la arena hasta las olas fuera seguro y sin ningún tipo de obstáculos que las pusiera en peligro.
        Este nacimiento no ha sido fruto de la casualidad, sino del esfuerzo constante de muchas personas durante mucho tiempo. El nido había sido vigilado y protegido día y noche durante sesenta días seguidos por un grupo de voluntarios muy comprometidos con el medio ambiente. Estos voluntarios se turnaron para cuidar que nadie molestara el lugar y que los huevos estuvieran a salvo de cualquier peligro externo o ruidos que pudieran afectarles. Gracias a este cuidado tan especial, la temperatura de la arena se mantuvo en unos niveles perfectos durante todo el tiempo de espera. Esto es algo muy importante porque, en el mundo de las tortugas, el calor de la arena es lo que decide si nacerán más machos o más hembras. En esta ocasión, el clima fue ideal para garantizar que naciera un número equilibrado de ambos, lo cual es fundamental para que la especie pueda seguir reproduciéndose y creciendo en el futuro.
        El éxito de este nido representa una gran noticia para la biodiversidad de nuestras costas y un premio al trabajo en equipo entre científicos y ciudadanos. Los expertos explicaron que cada pequeña tortuga que consigue alcanzar el mar es una nueva esperanza para su especie, ya que estos animales se enfrentan a muchos retos difíciles durante su vida en el océano abierto. Este acontecimiento nos recuerda a todos lo importante que es mantener nuestras playas limpias y respetuosas, para que las tortugas madre se sientan seguras al venir a poner sus huevos en nuestras orillas. Es un ejemplo perfecto de cómo, si cuidamos nuestro entorno natural, la naturaleza nos regala momentos tan mágicos y llenos de vida como el que se ha vivido estos días en Jávea.',
     'APROBADO', TRUE, 'Un pequeño paso hacia el océano.'),
    
    (1, 2, 'Río Segura Mejora', 'rio-segura.jpg', 'Los últimos estudios científicos han traído noticias muy positivas sobre la salud del río Segura, concretamente en la zona donde sus aguas se encuentran con el mar. Según los análisis más recientes, la calidad del agua ha mejorado muchísimo durante los últimos seis meses, alcanzando unos niveles de limpieza que no se veían desde hace mucho tiempo. Este cambio tan favorable no ha ocurrido por casualidad, sino que es el resultado directo de un gran esfuerzo por modernizar las estaciones depuradoras de la zona. Estas instalaciones ahora cuentan con tecnología mucho más avanzada que permite limpiar el agua de forma más eficaz antes de que llegue al cauce del río, eliminando sustancias que antes eran un problema para el medio ambiente.
        Además de la mejora en la tecnología, se ha puesto en marcha una vigilancia mucho más estricta sobre los residuos que sueltan algunas fábricas e industrias cercanas. Al controlar de cerca lo que llega al agua y asegurar que todos cumplan las normas de protección, el río ha empezado a recuperarse de manera natural. Gracias a que el agua está ahora mucho más limpia y tiene más oxígeno, se ha producido un fenómeno maravilloso: la vuelta de muchas especies de peces y otros animales fluviales que habían desaparecido de esta parte del río hace más de quince años. Ver de nuevo a estos animales nadando en la desembocadura es la mejor prueba de que el ecosistema está recuperando su equilibrio.
        Este avance es fundamental no solo para la naturaleza, sino también para todas las personas que viven cerca o visitan la desembocadura, ya que un río sano mejora la calidad de vida de todo el entorno. Los expertos señalan que este es el camino a seguir y que es vital mantener este nivel de cuidado y vigilancia para no perder lo que se ha conseguido. La recuperación del Segura nos enseña que, con inversión y respeto por las leyes ambientales, es posible devolver la salud a nuestros ríos y volver a disfrutar de la biodiversidad que los hace especiales. Es una gran noticia que nos anima a seguir protegiendo nuestros recursos naturales con la misma fuerza.',
     'APROBADO', TRUE, 'El agua vuelve a traer vida.'),
    
    (2, 3, 'Voluntarios Top', 'voluntarios.jpg', 'Hemos tenido la oportunidad de hablar con Ana, una experta que trabaja cada día como coordinadora de rescate marino, para que nos cuente de primera mano cómo es la difícil tarea de proteger a los animales en el mar Mediterráneo. En su trabajo diario, Ana se enfrenta a situaciones muy complicadas, desde rescatar tortugas que se han quedado atrapadas en redes hasta ayudar a delfines que aparecen desorientados cerca de nuestras playas. Ella nos explica que, aunque muchas veces pensamos que el mayor peligro para el mar es solo la basura que podemos ver flotando, como las bolsas de plástico o las botellas, existe una amenaza invisible que está haciendo muchísimo daño a la fauna marina y que casi nunca sale en las noticias.
        Ese gran problema del que nos habla Ana es el ruido submarino, provocado principalmente por los motores de las grandes embarcaciones y el tráfico constante de barcos de carga que cruzan nuestras aguas. Para muchos animales marinos, el sonido es su sentido más importante, casi como si fueran sus propios ojos bajo el agua. Ellos utilizan el sonido para comunicarse con su familia, para encontrar pareja y, lo más importante de todo, para localizar a sus presas y poder cazar. Cuando el ruido de los barcos es demasiado fuerte, se crea una especie de "niebla de sonido" que confunde por completo a las especies que viajan largas distancias, como las ballenas o los delfines, haciendo que se pierdan en sus rutas habituales.
        Ana destaca que esta contaminación acústica afecta gravemente a la capacidad de estos animales para alimentarse, ya que el ruido les impide escuchar los movimientos de los peces de los que se alimentan. Además, vivir en un entorno tan ruidoso les genera un estrés constante que debilita su salud y les impide descansar. Según nos cuenta la coordinadora, proteger el Mediterráneo no solo consiste en limpiar la arena de las playas, sino también en aprender a navegar de una forma más silenciosa y respetuosa. Es fundamental que entendamos que el silencio bajo el agua es vital para que estas especies puedan seguir viviendo y reproduciéndose en nuestras costas, y que nuestro objetivo debe ser devolverles la tranquilidad que necesitan en su hogar natural.',
     'APROBADO', TRUE, 'El rescate no entiende de horarios.'),
    
    (3, 2, 'Microplásticos Peligro', 'microplasticos.jpg', 'Recientemente se celebró una charla magistral muy importante que trató sobre un tema que nos afecta a todos, aunque casi no podamos verlo a simple vista: los peligros de los microplásticos en nuestra comida. Durante el evento, los expertos explicaron que estos trozos diminutos de plástico, que a veces son incluso más pequeños que un grano de arena, se han convertido en una de las mayores amenazas para el equilibrio de la naturaleza y para nuestra propia salud. Los asistentes pudieron conocer de primera mano cómo estas partículas han invadido todos los rincones del océano, creando un problema invisible que va mucho más allá de la suciedad que vemos acumulada en las orillas de las playas.
        Uno de los puntos más impactantes de la charla fue la explicación de cómo los microplásticos actúan como auténticas esponjas dentro del agua. Mientras flotan en el mar, estas partículas van absorbiendo y acumulando sustancias tóxicas y productos químicos peligrosos que están presentes en el océano. Cuando los animales marinos más pequeños se alimentan, confunden estos plásticos con comida y los ingieren, transportando todas esas toxinas directamente a sus propios tejidos y músculos. A medida que los peces más grandes se comen a los pequeños, el veneno se va acumulando en mayores cantidades, siguiendo un camino que termina finalmente en nuestros platos cuando consumimos pescado o marisco.
        Para intentar frenar esta situación, los científicos hicieron una petición muy clara y urgente a todas las personas: debemos reducir drásticamente el uso de ciertos productos de higiene y cosmética que usamos a diario. Muchos geles exfoliantes y pastas de dientes contienen unas bolitas minúsculas llamadas microesferas plásticas. El gran problema es que estas bolitas son tan pequeñas que los filtros de las tuberías no pueden atraparlas, por lo que acaban directamente en el mar cada vez que nos lavamos la cara o los dientes. Al elegir productos naturales que no tengan estos plásticos, estamos ayudando a romper esta cadena de contaminación y protegemos la salud de los océanos y la nuestra propia.',
     'APROBADO', TRUE, 'Invisible no significa inofensivo.'),
    
    (4, 1, 'Cala Ambolo Limpia', 'cala.jpg', 'Después de muchos meses en los que la basura se fue acumulando poco a poco, la famosa Cala Ambolo por fin ha recuperado su brillo natural. Debido a la forma de la costa y a la fuerza de las corrientes marinas, esta pequeña playa había estado recibiendo una gran cantidad de residuos que el mar arrastraba hasta sus rocas sin descanso. No era una limpieza fácil, ya que no se trataba solo de recoger papeles o botellas en la arena, sino de enfrentarse a plásticos y suciedad que se habían quedado pegados en lugares de muy difícil acceso, tanto bajo el agua como entre las grietas de las piedras más altas.
        Para solucionar este gran reto, se tuvo que organizar un equipo de buceadores especializados que trabajaron con mucho cuidado durante varios días. Estos expertos bajaron al fondo marino para extraer sedimentos y retirar todos esos trozos de plástico que llevaban mucho tiempo incrustados, casi formando parte del paisaje. Fue un trabajo físico muy duro y minucioso, pero gracias a su esfuerzo constante, han conseguido devolver a este paraíso natural su aspecto original, con aguas transparentes y un entorno libre de contaminación. Ver la cala ahora, totalmente limpia, nos recuerda lo hermosos que son nuestros rincones naturales cuando los cuidamos como se merecen.
        A raíz de esta limpieza tan profunda, las autoridades locales han empezado a debatir con mucha seriedad la posibilidad de limitar el acceso de personas a la cala en el futuro. El objetivo principal de esta medida sería evitar que la zona vuelva a ensuciarse y asegurar que el impacto ambiental sea el mínimo posible ahora que el lugar ha sido recuperado. Se busca encontrar un equilibrio para que la naturaleza pueda seguir su curso sin que la presencia humana suponga un peligro constante para el ecosistema. Es una decisión importante para garantizar que lugares tan especiales como Cala Ambolo sigan existiendo con toda su belleza para quienes vengan después de nosotros.',
     'APROBADO', TRUE, 'Recuperando paraísos perdidos.'),
    
    (5, 4, 'Posidonia es Vida', 'posidonia.jpg', 'Se ha presentado recientemente una investigación muy detallada que nos ayuda a entender por qué las praderas de Posidonia Oceánica son consideradas el auténtico pulmón del mar Mediterráneo. Aunque a veces podamos confundirlas con simples algas que molestan en la orilla, la Posidonia es en realidad una planta acuática muy especial que tiene raíces, flores y frutos, y que forma inmensos jardines bajo el agua. Su papel es fundamental para la vida de nuestro mar porque funcionan como una gran fábrica de oxígeno, limpiando el agua de forma constante y permitiendo que cientos de especies de peces y pequeños animales encuentren un lugar seguro donde vivir, esconderse y alimentarse. Sin estas praderas, el Mediterráneo perdería gran parte de su transparencia y de su biodiversidad.
        Además de producir oxígeno, estas plantas tienen una capacidad asombrosa para atrapar el carbono, ayudando así a purificar el aire y a luchar contra el cambio climático de una forma totalmente natural y gratuita. Pero sus beneficios no terminan bajo el agua; la Posidonia es también la mejor guardiana de nuestras playas. Sus hojas, incluso cuando se secan y llegan a la orilla formando esos montones oscuros que vemos a veces, crean una barrera que protege la arena de la fuerza de las olas. Este escudo natural evita que el mar se lleve la arena de la playa poco a poco, ayudando a que nuestras costas se mantengan anchas y protegidas frente a los temporales más fuertes.
        Sin embargo, el informe científico advierte de un peligro muy grave y directo que depende totalmente de nosotros: el fondeo de barcos de recreo en lugares no permitidos. Cuando un barco suelta su ancla directamente sobre una de estas praderas, el daño es inmediato y terrible. Al recoger el ancla, esta actúa como una garra que arranca de raíz trozos de pradera que han tardado cientos de años en formarse. Debemos ser muy conscientes de que la Posidonia crece extremadamente despacio, apenas unos pocos centímetros cada año, por lo que un descuido de apenas unos minutos puede destruir un ecosistema que ha estado ahí desde hace siglos. Es vital que todos los navegantes aprendan a identificar estas zonas y utilicen siempre las boyas de amarre, asegurando así que este tesoro natural siga cuidando de nuestro mar por mucho tiempo más.',
     'APROBADO', TRUE, 'Sin posidonia no hay Mediterráneo.'),
    
    (1, 3, 'Evento Cancelado', 'evento-cancelado.jpg', 'Debido a la llegada de un fuerte temporal marítimo y a las previsiones de viento muy intenso, con rachas que podrían superar los ochenta kilómetros por hora mañana, se ha tomado la decisión oficial de aplazar todas las actividades de limpieza de nuestras costas que estaban programadas. La seguridad de todas las personas que se habían apuntado para ayudar es lo más importante en estos momentos. Con vientos tan fuertes y una mala situación del mar, realizar cualquier tipo de trabajo cerca del agua o en las rocas se vuelve muy peligroso, ya que una ola inesperada o un golpe de viento podrían provocar accidentes innecesarios que queremos evitar a toda costa.
        Además del peligro para los voluntarios, el mal estado del mar hace que sea totalmente imposible utilizar las lanchas de apoyo que son fundamentales para este tipo de limpiezas. Estas embarcaciones son necesarias para recoger y transportar los residuos más pesados, como maderas grandes, redes viejas o restos de objetos que no se pueden llevar a mano por la arena. Sin la ayuda de estas lanchas, el trabajo de limpieza no se puede completar de forma correcta ni eficaz. Por tanto, se ha decidido que lo más sensato es esperar a que el tiempo mejore y el mar recupere la calma para poder trabajar con total tranquilidad y con todos los medios técnicos necesarios a nuestra disposición.
        La organización quiere agradecer de corazón el interés de todas las personas que ya estaban preparadas para participar y les pide un poco de paciencia. No se trata de una cancelación definitiva, sino simplemente de un cambio de fecha para asegurar que la jornada sea un éxito y, sobre todo, que nadie corra riesgos. En los próximos días, en cuanto los mapas meteorológicos aseguren que el peligro ha pasado, se anunciará la nueva fecha para retomar estas tareas tan necesarias para nuestro litoral. Mientras tanto, se recomienda a todo el mundo que evite acercarse a las zonas de costa y espigones durante el temporal, siguiendo siempre las recomendaciones de las autoridades para mantenerse a salvo.',
     'APROBADO', TRUE, 'La seguridad es nuestra prioridad.'),
    
    (6, 1, 'Ballena Avistada', 'ballena.jpg', 'Una ballena rorcual de dimensiones realmente impresionantes fue grabada hace muy poco mientras pasaba muy cerca de la costa de Denia. Este gigante del mar se encontraba realizando su ruta migratoria habitual hacia el océano Atlántico, un viaje que estos animales hacen cada año buscando aguas diferentes según la estación para alimentarse y reproducirse. Los testigos que tuvieron la suerte de verla se quedaron asombrados, ya que los expertos estiman que el animal medía unos dieciocho metros de largo, lo que la convierte en uno de los seres vivos más grandes y majestuosos que se pueden observar en nuestras aguas.
        Lo más especial de este encuentro no fue solo el tamaño de la ballena, sino su comportamiento tan tranquilo y pausado frente a la costa alicantina. En lugar de asustarse o sumergirse rápidamente para alejarse, el animal permitió que un grupo de investigadores que se encontraba trabajando en la zona pudiera documentar su paso con mucho detalle. Gracias a esta calma, los científicos pudieron observar de cerca su piel y sus movimientos, comprobando que se encontraba en un estado de salud muy bueno para continuar con su largo viaje. Poder estudiar a estos animales en libertad y sin causarles estrés es fundamental para entender mejor cómo viven y qué necesitan para estar bien protegidos.
        Este avistamiento tan claro sirve para recordarnos a todos la enorme importancia que tiene el corredor migratorio del mar Mediterráneo. Es como una gran autopista invisible bajo el agua que muchas especies utilizan para moverse de un lugar a otro a lo largo de miles de kilómetros. Denia y sus alrededores son puntos clave en este camino, y ver que animales tan grandes siguen usando esta ruta de forma segura es una señal de esperanza para la naturaleza. Nos recuerda que debemos ser muy cuidadosos con el tráfico de barcos y con la contaminación, para que estas ballenas puedan seguir cruzando nuestras costas sin peligro durante muchísimos años más.',
     'APROBADO', TRUE, 'Gigantes pasan por nuestra casa.'),
    
    (7, 2, 'Menos Colillas', 'colillas.jpg', 'La campaña de verano en la playa de San Juan ha terminado con unos resultados muy positivos que demuestran que, cuando nos lo proponemos, podemos cuidar mucho mejor nuestro entorno. Este año se ha conseguido reducir un treinta por ciento la presencia de colillas en la arena si lo comparamos con los datos del año pasado. Es un avance muy importante, ya que la playa de San Juan recibe a miles de personas cada día y mantener la arena limpia es un reto constante para los servicios de limpieza. Ver que hay menos restos de tabaco no solo hace que la playa se vea más bonita y cuidada, sino que también mejora mucho la experiencia de todos los bañistas que disfrutan del sol y del descanso en la orilla.
        El éxito de esta iniciativa se debe principalmente a dos acciones muy sencillas pero muy efectivas que se han llevado a cabo durante todos estos meses de calor. Por un lado, se han repartido miles de ceniceros reutilizables entre las personas fumadoras, dándoles una solución cómoda para que no tengan que dejar las colillas enterradas en la arena. Por otro lado, la presencia de informadores ambientales ha sido fundamental. Estas personas han recorrido la playa explicando de forma amable por qué es tan importante no tirar nada al suelo, resolviendo dudas y animando a todo el mundo a colaborar para mantener el litoral en perfecto estado.
        Este esfuerzo colectivo ha servido para evitar que miles de filtros de cigarrillos acaben mezclados con la arena o flotando en el agua del mar. Hay que tener en cuenta que una sola colilla parece algo pequeño, pero contiene sustancias químicas y plásticos que pueden llegar a contaminar muchísimos litros de agua marina y dañar la vida de los peces y otras especies. Al evitar que estos residuos lleguen al mar, estamos protegiendo directamente la salud de nuestras costas y asegurando que el agua siga estando limpia para el baño. Los organizadores están muy contentos con la respuesta de los ciudadanos y esperan que estos buenos hábitos se mantengan durante el resto del año, demostrando que con pequeños gestos podemos lograr grandes cambios para el medio ambiente.',
     'APROBADO', TRUE, 'La playa no es un cenicero.'),
    
    (8, 1, 'Buceo y Basura', 'buceo.jpg', 'La campaña de verano en la playa de San Juan ha terminado con unos resultados muy positivos que demuestran que, cuando nos lo proponemos, podemos cuidar mucho mejor nuestro entorno. Este año se ha conseguido reducir un treinta por ciento la presencia de colillas en la arena si lo comparamos con los datos del año pasado. Es un avance muy importante, ya que la playa de San Juan recibe a miles de personas cada día y mantener la arena limpia es un reto constante para los servicios de limpieza. Ver que hay menos restos de tabaco no solo hace que la playa se vea más bonita y cuidada, sino que también mejora mucho la experiencia de todos los bañistas que disfrutan del sol y del descanso en la orilla.
        El éxito de esta iniciativa se debe principalmente a dos acciones muy sencillas pero muy efectivas que se han llevado a cabo durante todos estos meses de calor. Por un lado, se han repartido miles de ceniceros reutilizables entre las personas fumadoras, dándoles una solución cómoda para que no tengan que dejar las colillas enterradas en la arena. Por otro lado, la presencia de informadores ambientales ha sido fundamental. Estas personas han recorrido la playa explicando de forma amable por qué es tan importante no tirar nada al suelo, resolviendo dudas y animando a todo el mundo a colaborar para mantener el litoral en perfecto estado.
        Este esfuerzo colectivo ha servido para evitar que miles de filtros de cigarrillos acaben mezclados con la arena o flotando en el agua del mar. Hay que tener en cuenta que una sola colilla parece algo pequeño, pero contiene sustancias químicas y plásticos que pueden llegar a contaminar muchísimos litros de agua marina y dañar la vida de los peces y otras especies. Al evitar que estos residuos lleguen al mar, estamos protegiendo directamente la salud de nuestras costas y asegurando que el agua siga estando limpia para el baño. Los organizadores están muy contentos con la respuesta de los ciudadanos y esperan que estos buenos hábitos se mantengan durante el resto del año, demostrando que con pequeños gestos podemos lograr grandes cambios para el medio ambiente.',
     'APROBADO', TRUE, 'Ojos bajo el agua para proteger.'),
    
    (9, 4, 'Educación Primaria', 'educacion.jpg', 'Esta mañana, el centro de interpretación marina se llenó de vida y entusiasmo con la visita de más de quinientos escolares de diferentes colegios de la zona. Fue una jornada muy especial donde los pasillos y las salas del centro vibraron con las preguntas y la curiosidad de los más pequeños. El objetivo principal de esta visita era que los niños y niñas pudieran conectar con el mundo marino de una forma directa, entendiendo que el mar que ven desde la orilla es un hogar lleno de seres vivos que necesitan nuestra ayuda. A través de juegos y explicaciones muy sencillas, los alumnos descubrieron que cuidar el medio ambiente puede ser una aventura muy divertida si se hace con ganas y en equipo.
        Una de las partes que más éxito tuvo entre los estudiantes fueron los talleres de manualidades creativas. Para estas actividades no se utilizaron materiales comprados, sino plásticos y otros residuos que habían sido recogidos previamente en limpiezas reales de nuestras playas. Al tocar con sus propias manos esos objetos, los niños comprendieron de forma muy clara que la basura no desaparece mágicamente cuando la perdemos de vista, sino que se queda en la naturaleza causando problemas durante mucho tiempo. Transformar una vieja botella de plástico o un tapón en una figura de un animal marino les ayudó a entender el valor del reciclaje y la importancia de dar una segunda vida a las cosas antes de tirarlas a la basura.
        Al final de la mañana, los escolares se marcharon a casa con una lección muy importante aprendida: la gestión de los residuos es un esfuerzo colectivo que empieza con los pequeños gestos de cada uno. Aprendieron que cada vez que deciden usar una papelera o separar los envases correctamente, están ayudando directamente a que los delfines, las tortugas y los peces tengan un mar más limpio y seguro para vivir. Los profesores destacaron que estas experiencias fuera del aula son las que más marcan a los niños, sembrando en ellos una semilla de respeto y cariño por nuestro litoral que les acompañará siempre. Es, sin duda, una noticia excelente que nos recuerda que la educación es la mejor herramienta para proteger nuestro futuro.',
     'APROBADO', TRUE, 'Niños hoy, guardianes mañana.'),
    
    (10, 3, 'Invasoras Fuera', 'especie-invasora.jpg', 'La Generalitat ha puesto en marcha una iniciativa muy importante llamada Plan 2026, diseñada específicamente para proteger nuestras costas del avance de especies que no son de aquí. A veces, por el tráfico de barcos o los cambios en la temperatura del agua, llegan plantas y animales de otros mares que empiezan a crecer sin control, ocupando el lugar de las especies que siempre han vivido en el litoral alicantino. Este plan busca frenar ese avance y devolver el equilibrio a nuestras aguas antes de que el daño sea más difícil de reparar, asegurando que nuestra biodiversidad local tenga una oportunidad para recuperarse.
        El gran problema en el que se centra este nuevo plan es un alga llamada Caulerpa cylindracea. Esta planta invasora se extiende por el fondo del mar como si fuera una alfombra muy espesa y crece con muchísima rapidez. Al cubrirlo todo, no deja que las plantas locales reciban la luz y el alimento que necesitan, terminando por asfixiarlas y dejando sin hogar a muchos peces que dependen de la vegetación autóctona. Para luchar contra esto, se va a dedicar una inversión importante a organizar limpiezas manuales. Esto significa que equipos de buceadores especializados bajarán al fondo para retirar el alga con sus propias manos, con mucho cuidado para no dañar el entorno que sí debe estar ahí.
        Además de la limpieza directa, el Plan 2026 incluye fondos para estudiar a los depredadores naturales. Los científicos quieren investigar si existen peces o pequeños animales en nuestro mar que puedan comerse esta alga invasora y ayudarnos a controlar su crecimiento de forma natural y segura. Es un trabajo que requiere mucha paciencia y observación, pero es fundamental para encontrar una solución a largo plazo. Cuidar lo que es nuestro y evitar que estas especies extrañas destruyan la riqueza de nuestras costas es una tarea urgente para que el mar de Alicante siga siendo un lugar lleno de vida y salud durante las próximas décadas.',
     'APROBADO', TRUE, 'Defendiendo lo nuestro.'),
    
    (11, 2, 'Redes Fantasma', 'redes-fantasma.jpg', 'Un grupo de buceadores profesionales que trabaja habitualmente en la reserva marina de la isla de Tabarca ha lanzado un aviso urgente sobre un peligro que permanece oculto bajo el agua: las llamadas redes fantasma. Se trata de redes de pesca que, por accidentes, enganches o fuertes temporales, se pierden y son abandonadas por los barcos. Aunque ya no tengan a nadie que las recoja, estas redes siguen cumpliendo su función de atrapar todo lo que pasa por ellas, convirtiéndose en un residuo muy peligroso que se queda enganchado en los arrecifes rocosos de esta zona protegida.
        El mayor problema de estas redes es que crean una trampa mortal que no se detiene nunca. Al estar fabricadas con materiales plásticos muy resistentes, no se rompen con el paso del tiempo y siguen capturando peces, cangrejos y otros animales marinos de forma indefinida. Los animales quedan atrapados sin poder escapar y mueren allí mismo, lo que a su vez atrae a otros animales que también acaban enganchados al intentar alimentarse de los que ya están en la red. Es un ciclo de destrucción silencioso que afecta gravemente a la vida marina de un lugar tan importante para la biodiversidad como es Tabarca.
        Además de ser un peligro para los seres vivos, estas redes están dañando físicamente la estructura de los arrecifes de roca. Con la llegada de las fuertes corrientes de invierno, las redes que están enganchadas son sacudidas con muchísima fuerza por el movimiento del agua. Este tironeo constante hace que la red actúe como una lija o una sierra, arrancando la vegetación y los pequeños corales que crecen sobre las piedras. Los buceadores insisten en que es fundamental localizar y retirar estos materiales cuanto antes, ya que cada día que una red fantasma pasa en el fondo del mar, el daño al ecosistema sigue creciendo.',
     'APROBADO', TRUE, 'Trampas que debemos retirar.'),
    
    (12, 4, 'Agua Cristalina', 'agua-cristalina.jpg', 'El último informe sobre la salud de nuestras costas ha traído una noticia excelente para todos los amantes del mar: las calas de Moraira han registrado este mes unos niveles de transparencia en el agua que no se veían desde hace muchísimo tiempo. Esta claridad es tan alta que casi parece que estemos mirando a través de un cristal muy limpio en lugar de agua salada. Ver el fondo marino con tanta nitidez es un regalo para la vista, pero también es una señal muy clara de que el ecosistema de la zona está funcionando perfectamente y que las condiciones ambientales han sido ideales durante las últimas semanas.
        Hay dos razones principales que explican por qué el agua está tan increíblemente limpia ahora mismo. La primera es que no hemos tenido lluvias torrenciales recientemente; normalmente, cuando llueve con mucha fuerza, el agua arrastra tierra y barro desde los montes hasta el mar, haciendo que se vuelva oscuro y sucio. La segunda razón, y quizás la más importante, es el excelente estado de salud en el que se encuentran las praderas de Posidonia. Estas plantas actúan como un filtro natural gigante que limpia el agua de forma constante, atrapando las partículas de suciedad y manteniendo la arena en su sitio para que no se levante y enturbie el paisaje submarino.
        Gracias a esta combinación de factores, la visibilidad bajo el agua ha alcanzado los quince metros de profundidad hacia abajo. Esto significa que, desde la superficie o con unas simples gafas de buceo, se puede observar lo que ocurre en el fondo con una precisión asombrosa. Esta situación es una oportunidad de oro para los investigadores y científicos, ya que les permite estudiar mucho mejor cómo viven los peces y cómo crecen las plantas marinas sin las dificultades habituales. Poder ver con tanta claridad les ayuda a contar las especies y comprobar que todo el ecosistema está en equilibrio, facilitando un trabajo que normalmente requiere mucho más equipo y esfuerzo.
        Este récord de transparencia nos recuerda lo valioso que es mantener nuestras costas libres de contaminación y vertidos. Cuando el mar está tranquilo y la vegetación marina está sana, la naturaleza nos ofrece espectáculos tan maravillosos como este, permitiéndonos disfrutar de toda la belleza que se esconde bajo las olas. Es una invitación a seguir cuidando nuestro entorno para que noticias así de positivas se repitan a menudo y para que cualquiera que se acerque a las calas de Moraira pueda seguir sorprendiéndose con la pureza y la vida de sus aguas.',
     'APROBADO', TRUE, 'La claridad que el mar merece.'),
    
    (13, 3, 'Nuevas Papeleras', 'papeleras.jpg', 'Una gran noticia para nuestros paseos marítimos es la llegada de una nueva tecnología que ayudará a mantener las calles mucho más limpias y ordenadas de una forma muy moderna. Gracias a una colaboración muy especial con la empresa tecnológica Eco-Tech, se han instalado unas papeleras muy avanzadas, conocidas como "papeleras inteligentes", en los puntos más concurridos de la costa. A diferencia de las papeleras de toda la vida, estas funcionan de manera totalmente autónoma gracias a pequeñas placas solares instaladas en su parte superior. Esto significa que aprovechan la luz del sol para obtener energía y realizar su trabajo sin necesidad de cables ni enchufes, lo que las hace perfectas para estar al aire libre junto al mar.
        La gran ventaja de estas papeleras es que cuentan con un sistema interno que compacta la basura de forma automática. Cuando una persona tira un envase o cualquier residuo, la máquina utiliza la energía solar para apretar la basura hacia abajo, haciendo que ocupe mucho menos espacio. Gracias a este sistema, estas papeleras pueden guardar hasta cinco veces más cantidad de desechos que una papelera tradicional del mismo tamaño. Esto es fundamental en verano o durante los fines de semana, cuando hay mucha gente paseando, ya que evita que las papeleras se llenen demasiado rápido y que la basura acabe desbordada por el suelo o volando hacia la arena de la playa.
        Pero lo más inteligente de estos dispositivos es que están conectados a un sistema central a través de sensores especiales. Estos sensores vigilan en todo momento cuánto espacio queda libre y, cuando la papelera llega al 80% de su capacidad, envía automáticamente un aviso a los servicios de limpieza a través de una aplicación. De esta manera, los trabajadores saben exactamente qué papeleras necesitan ser vaciadas y cuáles no. Esto permite organizar rutas de recogida mucho más cortas y eficientes, evitando que los camiones de basura den vueltas innecesarias por el municipio. Al circular menos tiempo, se ahorra combustible y se reduce la contaminación, logrando que nuestra ciudad sea mucho más respetuosa con el medio ambiente y que el aire que respiramos sea más puro.',
     'APROBADO', TRUE, 'Tecnología al servicio del medio.'),
    
    (14, 4, 'Dunas Protegidas', 'dunas.jpg', 'El trabajo para poner vallas de protección en las dunas de Guardamar ya ha terminado por completo. Esto es algo muy bueno porque permitirá que las plantas que siempre han vivido allí puedan volver a crecer tranquilas. Durante mucho tiempo, estas plantas sufrieron mucho porque la gente las pisaba sin querer al pasear por la arena, lo que hacía que se secaran y murieran. Sin plantas, las dunas se deshacen con el viento, pero ahora que están protegidas por las vallas, la vegetación volverá a cubrir la arena y a sujetarla con sus raíces, haciendo que el paisaje vuelva a ser como era antes.
        Mucha gente no sabe que las dunas son como un escudo protector para nosotros. Cuando hay tormentas muy fuertes en el mar y las olas suben mucho, las dunas frenan el agua y evitan que llegue a las casas o a las calles que están más adentro. Si las dunas están bien cuidadas y tienen muchas plantas, son mucho más fuertes y resistentes. Por eso, haber terminado este vallado es tan importante, ya que garantiza que tengamos una barrera natural que nos cuide de los temporales de cada invierno y de las subidas del nivel del mar en el futuro.
        Además de protegernos a nosotros, este espacio es el hogar de muchos pájaros de la zona. Al haber menos gente caminando por encima de las dunas, el lugar estará mucho más silencioso y seguro para ellos. Los biólogos están muy contentos porque creen que la próxima primavera muchas aves volverán a este lugar para poner sus huevos y tener a sus crías entre la vegetación. Es responsabilidad de todos respetar estas vallas y no saltarlas, para que podamos seguir disfrutando de una costa sana, con dunas fuertes y llena de vida natural.',
     'APROBADO', TRUE, 'Barreras que crean vida.');

-- ======================================================
-- 6. INSCRIPCIONES
-- ======================================================
INSERT INTO INSCRIPCIONES (ID_EVENTO, ID_USUARIO, ASISTIO)
VALUES 
    (1, 1, TRUE),
    (1, 2, TRUE),
    (1, 4, TRUE),
    (2, 5, FALSE),
    (3, 2, TRUE),
    (3, 7, TRUE),
    (4, 1, TRUE),
    (5, 2, TRUE),
    (6, 9, TRUE),
    (7, 10, FALSE),
    (8, 11, TRUE),
    (9, 12, TRUE),
    (10, 2, TRUE),
    (12, 15, TRUE),
    (13, 16, TRUE),
    (14, 17, TRUE),
    (15, 18, TRUE),
    (16, 19, TRUE),
    (17, 20, TRUE),
    (18, 21, TRUE),
    (19, 22, TRUE),
    (20, 23, TRUE),
    (21, 2, TRUE),
    (22, 25, TRUE),
    (23, 26, TRUE),
    (24, 27, TRUE),
    (25, 28, TRUE),
    (26, 29, TRUE),
    (27, 30, TRUE);

-- ======================================================
-- 7. RECOLECCION_RESIDUOS
-- ======================================================
INSERT INTO RECOLECCION_RESIDUOS (ID_EVENTO, CANTIDAD_RECOLECTADA)
VALUES 
    (1, 150.5),
    (3, 420.2),
    (4, 85.0),
    (5, 12.3),
    (8, 25.5),
    (9, 610.0),
    (11, 45.0),
    (12, 110.4),
    (13, 230.1),
    (14, 55.2),
    (15, 180.0),
    (20, 95.5),
    (23, 60.0),
    (24, 34.2),
    (25, 8.5),
    (29, 750.0);

-- ======================================================
-- 8. CALIFICACIONES
-- ======================================================
INSERT INTO CALIFICACIONES (ID_USUARIO, ID_EVENTO, CALIFICACION, COMENTARIO)
VALUES 
    (2, 1, 5, 'Increíble organización en la playa'),
    (3, 1, 4, 'Hacía mucho calor, pero valió la pena'),
    (6, 3, 5, 'Muy necesario para el barrio'),
    (1, 4, 3, 'Faltaron herramientas, pero el ambiente fue bueno'),
    (8, 5, 5, 'Aprendí mucho sobre reciclaje'),
    (9, 6, 4, 'Buen equipo de trabajo'),
    (11, 8, 5, 'Los kayaks estaban en perfecto estado'),
    (12, 9, 5, 'La vista de la montaña es insuperable'),
    (13, 10, 2, 'No se cumplió el horario previsto'),
    (14, 11, 4, 'Cansado pero satisfecho con la reforestación'),
    (15, 12, 5, 'Volveré a participar sin duda'),
    (16, 13, 3, 'Poca visibilidad en el sendero'),
    (17, 14, 4, 'Un reto físico importante'),
    (20, 17, 5, 'Las aves que vimos fueron espectaculares'),
    (22, 19, 5, 'Muy educativo para los niños'),
    (25, 22, 4, 'Bien organizado, aunque lejos'),
    (29, 26, 5, 'La mejor actividad del mes');

-- ======================================================
-- 9. CONTACTOS
-- ======================================================
INSERT INTO CONTACTOS (NOMBRE, APELLIDOS, EMAIL, DIRECCION, MENSAJE, FECHA_CREACION)
VALUES
    ('Laura', 'García', 'laura.garcia@email.com', 'Calle Falsa 123, Madrid', 'Hola, me gustaría saber cómo puedo registrar mi ONG en vuestra plataforma.', CURRENT_TIMESTAMP),
    ('Carlos', 'Martínez', 'carlos.mtz@email.com', NULL, 'Tengo una duda sobre el próximo evento.', CURRENT_TIMESTAMP),
    ('Ana', 'López', 'ana.lopez@email.com', 'Avenida Libertad 45, Barcelona', 'Error al subir foto de perfil.', CURRENT_TIMESTAMP);
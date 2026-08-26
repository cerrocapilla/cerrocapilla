// ============================================================
//  🌄 CAPILLA DEL MONTE - GUÍA TURÍSTICA
//  app.js - Mapa, Lugares, Eventos, Novedades, Noticias
//  VERSIÓN 9 - CON BADGES ESTILO ANDROID EN SECCIONES
// ============================================================

// ============================================================
//  1. LISTA DE 50 LUGARES
// ============================================================
const lugares = [
    {
        // QUE HACER

        id: 1, 
        nombre: "Calle Techada.", 
        categoria: "Atracción Turística",
        direccion: "Diagonal Buenos Aires", 
        coordenadas: [-30.8596, -64.5238],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun - Dom 24hs",
        descripcion: "La Techada. Pocas ciudades en el mundo cuentan con una calle con techo, de hecho es la única en Latinoamérica. <strong>abierto todo el año</strong>.",
        metodoPago: ["Efectivo"],
        // NUEVA PROPIEDAD CON ÍCONOS
    iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]

    },
    {
        id: 2, 
        nombre: "Cine / Teatro Enrique Muiño", 
        categoria: "Cine",
        direccion: "Dean Funes 526", 
        coordenadas: [-30.858812, -64.524938],
        telefono: null, 
        whatsapp: "+549354815582506", 
        instagram: null,
        facebook: "turismocapilla", 
        twitter: null, 
        website: "https://turismocapilla.gob.ar/cine/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun - Dom 24hs",
        descripcion: "Presenta actividades (cine, teatro, musica y conferencias) durante todo el año. Conoce nuestra cartelera en nuestro Facebook y pagina web.",
        metodoPago: ["Efectivo", "MercadoPago"],
    iconos: [

        { nombre: "WiFi", icono: "fa-wifi", color: "#2196F3" }
    ]
    },
    {
        id: 3, 
        nombre: "Feria de Artesanos", 
        categoria: "Ferias",
        direccion: "Plaza San Martin", 
        coordenadas: [-30.856938, -64.525937],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun - Dom 24 hs",
        descripcion: "Con 30 años continuos de exposición, es la mas linda y rica feria de artesanias del Valle de Punilla. Del artesano a sus manos, artesanias con valor humano. <strong>Abre en temporada todos los días de 19:00 a 00:00 HS</strong>. Chequear horarios durante el resto del año",
        metodoPago: ["Efectivo"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" }
    ]
    },
    {
        id: 4, 
        nombre: "Pueblo Encanto", 
        categoria: "Atracción Turística",
        direccion: "9 de Julio esq. Entre Rios", 
        coordenadas: [-30.852438, -64.529313],
        telefono: null, 
        whatsapp: "+5493548437216", 
        instagram: null,
        facebook: "PuebloEncantoCba", 
        twitter: null, 
        website: "//www.puebloencanto.com.ar/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Abierto todo el año de 09:30 - 19:00 hs",
        descripcion: "Parque temático de 16 hectareas, que cuenta con un importante castillo hispano-morisco estilo mudéjar. Un acercamiento inedito al arte y la cultura, en un castillo de ensueño. <strong> Abierto todo el año. Solo con reserva</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" }
    ]
    },
    {
        id: 5, 
        nombre: "Castillo del Comic", 
        categoria: "Entretenimiento",
        direccion: "Gdor. Pedro J. Frías 57", 
        coordenadas: [-30.859063, -64.519937],
        telefono: "+543548438920", 
        whatsapp: null, 
        instagram: null,
        facebook: "CastilloComic", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Mar 11:00 - 21:00 / Mie Cerrado / Jue-Dom 11:00 - 21:00 hs",
        descripcion: "Casona antigua de 1905 (ex Hotel Argentino). Alberga hoy miles de piezas de colección. Es el museo de comics más grande del país. Ofrece talleres de dibujo y escultura, juegos de mesa. Restaurante con menú para superhéroes. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]
    },
    {
        id: 6, 
        nombre: "Balneario Calabalumba (Eco Camping Calabalumba)", 
        categoria: "Camping",
        direccion: "Cerro Uritorco 123", 
        coordenadas: [-30.856313, -64.520313],
        telefono: null, 
        whatsapp: "+5493548566000", 
        instagram: "@ecocampingcalabalumba/",
        facebook: "Eco-Camping-Calabalumba-100076537416590", 
        twitter: null, 
        website: "//eco-camping-calabalumba5.webnode.page/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 10:00 - 21:00",
        descripcion: "Balneario con gran arboleda y piletas de agua de vertiente. Ideal para pasar el día en familia. <strong> Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "AguaCaliente", icono: "fa-hot-tub", color: "#FF6B35" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 7, 
        nombre: "Casa Blanca la Granaja", 
        categoria: "Camping",
        direccion: "Calabalumba y Sabattini", 
        coordenadas: [-30.857438, -64.519563],
        telefono: null, 
        whatsapp: "+5493548562434", 
        instagram: "@lagranjadecapilla",
        facebook: "casablancalagranjadecapilla", 
        twitter: null, 
        website: "www.lagranjadecapilla.com.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Vie 08:00 - 18:00 / Sáb 09:00 - 18:00 / Dom 09:00 - 13:00 hs",
        descripcion: "Es un emprendimiento familiar integral para psar el día viviendo una agro experiencia. Podes encontrar animales de granja y huerta organica ¡Una salida ideal para los más pequeños! <strong>Abierto todo el año</strong>.",
        metodoPago: [],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 8, 
        nombre: "Cio Centro de Informes Ovnis", 
        categoria: "Centro de Informes Ovni",
        direccion: "Int. Juan Cabus 397", 
        coordenadas: [-30.857937, -64.515438],
        telefono: "+543548482485", 
        whatsapp: "+5493548407783", 
        instagram: null,
        facebook: "CentroInformesOVNI", 
        twitter: "cioluz", 
        website: "ciouritorco.com.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "A confirmar",
        descripcion: "Organización sin fines de Lucro, dedicada al estudio cientifico e investigación de fenomenos no explicados. Centro de informes especializado, con reconocimiento de trayectoria. Brindan charlas.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" }
    ]
    },
    {
        id: 9, 
        nombre: "La Higuerita", 
        categoria: "Senderismo",
        direccion: "Calle 11 al fondo (tranquera) Barrio El Faldeo", 
        coordenadas: [-30.861209, -64.498378],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: "", 
        horario: "Abierto todo el año",
        descripcion: "el camino de la Higuerita es un circuito por la ladera del Cerro Uritorco boreando el Río Calabalumba, un sendero lleno de vida, rodeado de flota autóctona evoca a la magía y misterio del lugar. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" }
    ]
    },
    {
        id: 10, 
        nombre: "Cerro Uritorco", 
        categoria: "Senderismo",
        direccion: "Av. Amadeo Sabattinni", 
        coordenadas: [-30.862187, -64.495688],
        telefono: null, 
        whatsapp: "+5493548608093", 
        instagram: "@cerrouritorcooficial",
        facebook: "CerroUritorcoOficial", 
        twitter: null, 
        website: "//cerrouritorcoam.com.ar/home",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 08:00 - 18:00 hs",
        descripcion: "Mitico Cerro Uritorco. Tierra de enigmas y misterios que convoca miles de personas al año que se aventuran en este gran desafio y superacion personal. <strong>Consultar horarios de ascenso</strong>. Requisitos: Calzado acordonado y 1,5 litros de agua por persona (excluyente). Apto para pernoctar en la cima, <strong>Solo con guía habilitado</strong>. Ascenso: 4 horas aprox. Descenso: 3 horas aprox. Altura: 1.979 mts. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    // ===== DÓNDE DORMIR =====
    {
        id: 11, 
        nombre: "Huertas Malas", 
        categoria: "Senderismo",
        direccion: null, 
        coordenadas: [-30.855438, -64.474812],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 24hs",
        descripcion: "Por la cuesta del Toro. Huertas Malas esta enclavada en una quebrada verde que se ve nitidamente desde un col del Cerro Overo, que permite el descenso. Alli el arroyo corre entre grendes bloques lo que genera la famosa <strong>Cascada de Las Golondrinas</strong>, de unos 15. El Balneario La Toma es el punto de partida, desde el que se gana altura en forma constante metros de altura, y <strong>La Cueva del Hermitaño</strong>. <strong>Solo con guía habilitado.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]
    },
    {
        id: 12, 
        nombre: "Puesto Pavón", 
        categoria: "Turismo Aventura",
        direccion: "", 
        coordenadas: [-30.835437, -64.459937],
        telefono: null, 
        whatsapp: "+5493548606005", 
        instagram: "@puestopavon",
        facebook: "PuestoPavon", 
        twitter: null, 
        website: "www.puestopavon.com.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 09:00 - 18:00 hs",
        descripcion: "Se encuentra en la ladera este del mitico Cerro Uritorco. Es el lugar ideal para travecias 4x4, trekking, cabalgatas, actividades de montañismo y astroturismo. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 13, 
        nombre: "Casa de Plata", 
        categoria: "Turismo Aventura",
        direccion: "", 
        coordenadas: [-30.861812, -64.478313],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 24hs",
        descripcion: "Cueva natural ubicada en el medio de la montaña, a dos horas del Balneario La Toma. Rodeada de paisajes de cuarzo, quebradas y el Río Huertas Malas; y proximo a la Cascada el Caracol.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]
    },
    {
        id: 14, 
        nombre: "Dique Los Alazanes", 
        categoria: "Senderismo",
        direccion: "", 
        coordenadas: [-30.885188, -64.458687],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 24hs",
        descripcion: "Dique enclavado entre los Cerros. Apto para pesca deportiva de trucha <strong>con devolucíon. 2 Horas de caminata promedio de ida. Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 15, 
        nombre: "Camping San Rafael (Camping La Toma)", 
        categoria: "Camping",
        direccion: "Amadeo Sabattini", 
        coordenadas: [-30.863188, -64.493688],
        telefono: null, 
        whatsapp: "+5493548435259", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: "//www.cerrouritorcoam.com.ar/camping",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 08:00 - 18:OO hs",
        descripcion: "Balneario en la base de Cerro Uritorco. Donde se encuentra el Río Calabalumba y la Desembocadura del Dique Los Alazanes. podés recorrerolo y encontrar más de 7 saltos de agua. Se permite acampar solo en zonas permitidas. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 16, 
        nombre: "Biblioteca El Sendero", 
        categoria: "Biblioteca",
        direccion: "Dip. Enrique Zanni", 
        coordenadas: [-30.872188, -64.518313],
        telefono: "+543548481619", 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "A confirmar",
        descripcion: "Colección de libros alternativos que dificilmente encontrarás en otra Biblioteca. Abierta a todo publico, podés consultar el material que quieras en un cálido espacio de lectura. Cuenta también con mirador. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" }
    ]
    },
    {
        id: 17, 
        nombre: "Reserva Natural Villa Cielo", 
        categoria: "Reserva Natural",
        direccion: "Aristobulo del Valle y Triunvirato", 
        coordenadas: [-30.866687, -64.513937],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 06:00 - 20:30 hs",
        descripcion: "Paseo para descubrir el monte, señalización para identificar especies de árboles autóctonos, avistaje de Aves y diferentes vistas de la ciudad. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" }
    ]
    },
    {
        id: 18, 
        nombre: "Agua de Los Palos", 
        categoria: "Turismo Aventura",
        direccion: "Av.las Gemelas", 
        coordenadas: [-30.886437, -64.497687],
        telefono: null, 
        whatsapp: "+5493548419465", 
        instagram: "@aguadelospalos",
        facebook: null, 
        twitter: null, 
        website: "//turismocapilla.gob.ar/directorio/aventura/agua-de-los-palos-2/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Jue-Dom 11:00 - 19:00 hs",
        descripcion: "Es un paseo de montaña que se encuentra en el Cerro Las Gemelas (a 1350 mts. sobre el nivel del Mar). Es un imperdible complejo para pasar una tarde o un día completo donde podés disfrutar de actividades y servicios.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    // ===== DÓNDE COMER =====
    {
        id: 19, 
        nombre: "Finca La Marta", 
        categoria: "Atracción Turística",
        direccion: "Padre Ferreyra 149", 
        coordenadas: [-30.869563, -64.530187],
        telefono: null, 
        whatsapp: "+5493548551682", 
        instagram: "@cortijo.wine.lodge",
        facebook: null, 
        twitter: null, 
        website: "fincalamarta.com.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Sábado 19:00 - 23:30 hs",
        descripcion: "Venta y degustación de vinos Cordobeses y productos naturales de la región. Variedad en picadas regionales. Meriendas de campo.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" }
    ]
    },
    {
        id: 20, 
        nombre: "Balneario Aguila Blanca", 
        categoria: "Balnearios",
        direccion: "Spilimbergo", 
        coordenadas: [-30.869188, -64.547188],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: "", 
        horario: "Lun-Dom 08:00 - 20:00 hs",
        descripcion: "Formado por las aguas del Río Dolores, tipico paisaje serrano enclavado donde comienza el embalse del Dique El Cajón. Cuenta con Parrillas, Sanitarios añosa arboleda y servicio de proveduria. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" }
    ]
    },
    {
        id: 21, 
        nombre: "Dique El Cajón", 
        categoria: "Dique",
        direccion: "", 
        coordenadas: [-30.853437, -64.550313],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "A Confirmar",
        descripcion: "Playa de lago, ideal vista del atardecer sobre el Uritorco. Pesca de Pejerrey y carpa <strong>(NO HACE FALTA DEVOLUCIÓN)</strong>, windsurf, canotaje y vela. No está permitido el uso de transporte a motor. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 22, 
        nombre: "Club de Pesca - La Tapera de Muinio", 
        categoria: "Club de Pesca",
        direccion: "Indeterinado", 
        coordenadas: [-30.860312, -64.544562],
        telefono: null, 
        whatsapp: "+5493548463508", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 09:00 - 18:00 hs",
        descripcion: "Apto para pesca de costa - carpa y pejerrey - <strong>(NO HACE FALTA DEVOLUCIÓN)</strong>. Alquiler de botes, venta de articulos de pesca y carnadas. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 23, 
        nombre: "Complejo Etico El Zapato", 
        categoria: "Atracción Turística",
        direccion: "Cordoba 1200", 
        coordenadas: [-30.855688, -64.538313],
        telefono: null, 
        whatsapp: "+5493541336958", 
        instagram: "@paseoeticoelzapato",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 10:00 - 19:00 hs",
        descripcion: "Escultura granitica natural. Esta piedra es protagonista de leyendas donde se congreganban los caciques, hechiceros y curanderos de todas las tribus para meditar y deliberar sobre asuntos comunes. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 24, 
        nombre: "Parador El Paraiso", 
        categoria: "Balnearios",
        direccion: "Av. Las Americas", 
        coordenadas: [-30.851687, -64.548812],
        telefono: null, 
        whatsapp: "+5493548573369", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 09:00 - 19:00 hs",
        descripcion: "Balneario donde se puede disfrutar placenteros momentos rodeados de naturaleza, en compañia de los animales del lugar del Río Dolores. Tiene toboganes pequeños en las rocas. Ideal para niños. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 25, 
        nombre: "Paseo Los Mogotes y Paso del Indio", 
        categoria: "Atracción Turística",
        direccion: "", 
        coordenadas: [-30.841563, -64.546563],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 08:00 - 21:00 hs",
        descripcion: "Muros de piedra atravesados por el Río Dolores y más adelante el Río Calabalumba aumenta su caudal. Ideal para escaladores que quieren poner a prueba sus técnicas. Cuenta con 300 Vías de <strong>escalada</strong>. también es un punto especial <strong>SKYLINE</strong> y <strong>TREKKING</strong> de riesgo medio alto. <strong>PASO DEL INDIO:</strong> Un sendero con escaleras de piedra y una cueva de paso angosto, que tras atravesarlos vas a encontrarte con vistas maravillosas. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 26, 
        nombre: "Los Paredones", 
        categoria: "Atracción Turística",
        direccion: "A 7km de la Plaza San Martin. Parada de Colectivo: Río Seco.", 
        coordenadas: [-30.802937, -64.541313],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Indeterminado",
        descripcion: "Ideal para la practica de escalada en roca. Se llega por un sendero siguiente al Río Seco, hasta alcanzar Los Paredones que lo caracterizan.Paisaje agreste flora y fauna autoctonas. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" }
    ]
    },
    {
        id: 27, 
        nombre: "Restaurante Laguna Tramontana", 
        categoria: "Restaurante",
        direccion: "Ruta Nacional 38, a 9km de Plaza San Martin", 
        coordenadas: [-30.801687, -64.492063],
        telefono: null, 
        whatsapp: "+5493548635603", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: null, 
        horario: "Lun-Dom 12:30 - 17:00 hs",
        descripcion: "Es un rancho de 1800 acondicionado para lograr un restaurante de lujo, en medio del predio de un criadero de truchas, con laguna incluida. Está ubicado al pie de la ladera norte del Cerro Uritorco. Cuenta con una laguna artificial para pasar el día disfrutando del entorno natural. <strong>Abierto todo el año. Restaurante con reserva</strong>",
        metodoPago: ["Efectivo"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 28, 
        nombre: "Los Terrones", 
        categoria: "Atracción Turística",
        direccion: "Ruta Provincial 17, km. 6 km", 
        coordenadas: [-30.779313, -64.495688],
        telefono: null, 
        whatsapp: "+5493548418914", 
        instagram: null,
        facebook: "100064356895764", 
        twitter: null, 
        website: "//losterrones.com.ar/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Invierno 09:00 - 18:30 hs / Verano 09:00 - 19:30 hs",
        descripcion: "Se trata de una formación geológica de arsénicas, conglomerados o masa de ignea que forman un sector de significativa curiosidad. <strong>Abierto todo el año</strong>",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 29, 
        nombre: "Gruta de Nuestra Señora de Lourdes", 
        categoria: "Gruta Religiosa",
        direccion: "Av. Amadeo Sabattini - Base del Cerro", 
        coordenadas: [-30.862563, -64.496063],
        telefono: null, 
        whatsapp: "+5493548419300", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null,
        descripcion: "Réplica inspirada en el santuario de Francia.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]
    },
    {
        id: 30, 
        nombre: "Parque Natural Ongamira", 
        categoria: "Senderismo",
        direccion: "Ruta Provincial 17, Km 14", 
        coordenadas: [-30.773063, -64.410687],
        telefono: null, 
        whatsapp: "+5493525634844", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null,
        descripcion: "Es un tesoro arqueológico en medio del impactante Valle de Ongamira. Un circuito donde podra apreciar morteros, La Cueva del Indio centro ceremonial. Para  lo más aventureros es ideal para trekking. <strong>Abierto todo el año</strong> ",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" }
    ]
    },
    {
        id: 31, 
        nombre: "Grutas Ongamira", 
        categoria: "Gruta Religiosa",
        direccion: "Ruta Provincial 17, Km 18", 
        coordenadas: [-30.774563, -64.406063],
        telefono: null, 
        whatsapp: "+5493525634844", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: "Lun-Dom 09:00 - 19:00 hs",
        descripcion: "Con 130 millones de años, este paisaje rojizo de arenisca las Cuevas de Ongamira (o tambien llamadas grutas), contruyen la Qhinta Maravilla Natural de la provincia, y descubrir los diversos aleros arqueológicos. También se puede hacer avistaje de cóndores y cabalgatas. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 32, 
        nombre: "Cerro Colchiqui", 
        categoria: "Atracción Turística",
        direccion: "Ruta Provincial 17,Km 16", 
        coordenadas: [-30.772562, -64.411687],
        telefono: null, 
        whatsapp: "+5493518063104", 
        instagram: "@cerrocolchiqui",
        facebook: "crrocolchiquin", 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: "", 
        horario: "Lun-Dom 09:00 - 18:00 hs",
        descripcion: "listo - El Cerro Colchaquí, antes llamado Charalqueta, Cerro sagrado para el pueblo comechingón. <strong>ABIERTO TODO EL AÑO. SI HAY NIEBLA NO SE PERMITE EL ACCESO AL CERRO</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 33, 
        nombre: "Sitio Arqueólogico Alero Deodoro Roca", 
        categoria: "Cultura",
        direccion: "Ruta Provincial 17, Km 17", 
        coordenadas: [-30.774563, -64.413687],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null,
        descripcion: "Museo de gran contenido histórico del lugar y mostrar de forma simple los sucesos que cambiaron a la vida de Punilla. El vicitante puede disfrutar de una importante pinacoteca y de su extensa colección. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "MercadoPago"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" }
    ]
    },
    {
        id: 34, 
        nombre: "Puertas del Cielo", 
        categoria: "Atracción Turística",
        direccion: "Ruta Provincial 17, Km 22", 
        coordenadas: [-30.778062, -64.358187],
        telefono: null, 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Indeterminado",
        descripcion: "En el Valle de Ongamira. Ideal para astroturismo, misterio y conexión ancestral. <strong>Abierto todo el año</strong>.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" }
    ]
    },
    {
        id: 35, 
        nombre: "Parroquia San Antonio de Padua", 
        categoria: "Iglesia",
        direccion: "Av. Velez Sarfield", 
        coordenadas: [-30.858063, -64.520313],
        telefono: "+543548481103", 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 09:00 - 21:00 hs",
        descripcion: "La Parroquia San Antonio de Padua es la iglesia principal de Capilla del Monte. Construida entre los años 1695 y 1719 por mandato del Capitán Antonio de Ceballos, se edificó provisoriamente como capilla y estaba echa de adobe, pero en el año 1908 se contruye finalmente el actual edificio sobre el anterior hecho de paredes de piedra. Podrás contemplar esta obra arquitectónica que además de bella es protagonista de la historia del lugar.",
        metodoPago: ["Efectivo", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" }
    ]
    },
    {
        id: 36, 
        nombre: "Punto Faro", 
        categoria: "Atracción Turística",
        direccion: "A 5 Km de Plaza San Martin", 
        coordenadas: [-30.857813, -64.550687],
        telefono: null, 
        whatsapp: "+5493548585832", 
        instagram: "@puntofarocdm",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 09:00 - 23:00 hs",
        descripcion: "Ubicado sobre las playas del Dique El Cajón, ofrece varios servicios y opciones combinando disfrute, relax y aventura, dentro de un entorno totalmente de naturaleza y con una de las vistas panorámicas mas lindas de nuestros cerros.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
        iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    {
        id: 37, 
        nombre: "Espacio Muiñio", 
        categoria: "Restaurante",
        direccion: "A 2 Km. de Plaza San Martin", 
        coordenadas: [-30.861187, -64.545063],
        telefono: null, 
        whatsapp: "+5491161998937", 
        instagram: "@espaciomuinio",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Jue-Dom 11:00 - 20:00 hs",
        descripcion: "En la mágica costa del Dique El Cajón, en Capilla del Monte, te espera Espacio Muiño, un lugar único en una casona histórica que combina naturaleza, sabor y relax.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },
    /*{
        id: 38, 
        nombre: "Panadería Don Pancho", 
        categoria: "Panadería",
        direccion: "Rivadavia 234", 
        coordenadas: [-30.8575, -64.5240],
        telefono: "+5493517890123", 
        whatsapp: null, 
        instagram: "@donpanchopan",
        facebook: "PanaderíaDonPancho", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Sáb 5:00-19:00",
        descripcion: "Pan de campo, tortas y facturas recién horneadas.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 39, 
        nombre: "Almacén El Progreso", 
        categoria: "Despensa",
        direccion: "Av. Libertad 123", 
        coordenadas: [-30.8565, -64.5235],
        telefono: "+5493511234567", 
        whatsapp: null, 
        instagram: null,
        facebook: "AlmacénElProgreso", 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: "10:00 - 20:00 | $300", 
        horario: "Lun-Sáb 8:00-20:00",
        descripcion: "Almacén con gran variedad de productos y atención personalizada.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 40, 
        nombre: "Despensa Doña María", 
        categoria: "Despensa",
        direccion: "Av. San Martín 456", 
        coordenadas: [-30.8670, -64.5270],
        telefono: "+5493518901234", 
        whatsapp: "+5493518901234", 
        instagram: "@despensadonamaria",
        facebook: "DespensaDoñaMaria", 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: "9:00 - 21:00 | $400", horario: "Lun-Sáb 8:00 - 21:00 / Dom 9:00 - 14:00",
        descripcion: "Productos regionales, bebidas, golosinas y artículos de limpieza.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 41, 
        nombre: "Despensa El Pueblo", 
        categoria: "Despensa",
        direccion: "Belgrano 789", 
        coordenadas: [-30.8680, -64.5280],
        telefono: "+5493519012345", 
        whatsapp: null, 
        instagram: null,
        facebook: "DespensaElPueblo", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Sáb 8:00 - 20:00",
        descripcion: "Despensa de barrio con todo lo que necesitas para el día a día.",
        metodoPago: ["Efectivo"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    // ===== SERVICIOS =====
    /*{
        id: 42, 
        nombre: "Farmacia Red Vig Farma", 
        categoria: "Farmacia",
        direccion: "Diag. Buenos Aires 128/132", 
        coordenadas: [-30.8596, -64.5235],
        telefono: null, 
        whatsapp: "+5493548586616", 
        instagram: "@redvigfarma_",
        facebook: "redvigfarma", 
        twitter: null, 
        website: "vigfarma.com.ar",
        delivery: true, 
        deliveryInfo: "", 
        horario: "Lun-Sáb 08:00 - 23:00 / Dom 09:30 - 14:30 / 17:00 - 22:00",
        descripcion: "Farmacia con turnos y delivery. La calidad que nos caracteriza.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 43, 
        nombre: "Hospital Municipal", 
        categoria: "Hospital",
        direccion: "Sarmiento 452", 
        coordenadas: [-30.8559, -64.5275],
        telefono: "+543548481082", 
        whatsapp: "+5493548583303", 
        instagram: null,
        facebook: "100057518766592", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 24hs",
        descripcion: "Hospital municipal con atención médica general y urgencias.",
        metodoPago: ["Efectivo", "Tarjeta"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 44, 
        nombre: "Jefatura de Policía", 
        categoria: "Comisaría",
        direccion: "Sarmiento 318", 
        coordenadas: [-30.8573, -64.5276],
        telefono: "+54354815435879", 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, horario: "Lun-Dom 24hs",
        descripcion: "Comisaría de Capilla del Monte.",
        metodoPago: ["Efectivo"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 45, 
        nombre: "Municipalidad", 
        categoria: "Municipalidad",
        direccion: "Sarmiento 318", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548481026", 
        whatsapp: null, 
        instagram: "@municapilla",
        facebook: "municapilladelmonte", 
        twitter: null, 
        website: "capilladelmonte.gov.ar",
        delivery: false, 
        deliveryInfo: "", 
        horario: "Lun-Vie 08:00 - 13:00",
        descripcion: "Organización gubernamental del municipio.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 46, 
        nombre: "Ferretería Todo Positivo", 
        categoria: "Ferretería",
        direccion: "Pueyrredón 426", 
        coordenadas: [-30.8606, -64.5231],
        telefono: null, 
        whatsapp: "+5493548508178", 
        instagram: "@todopositivoo",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Vie 8:30-18:00 / Sáb 9:00-13:00",
        descripcion: "Todo para la construcción, herramientas y materiales.",
        metodoPago: ["Efectivo", "Tarjeta"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 47, 
        nombre: "Ferretería Casa Seia", 
        categoria: "Ferretería",
        direccion: "Rivadavia 432", 
        coordenadas: [-30.8579, -64.5258],
        telefono: null, 
        whatsapp: "+5493548548843", 
        instagram: null,
        facebook: "100057590073868", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: "", 
        horario: "Lun-Vie 08:30 - 13:00 / 16:00 - 20:00 / Sáb 09:00 - 13:30 / Dom Cerrado",
        descripcion: "Variedad de herramientas. Encontrá lo que buscas.",
        metodoPago: ["Efectivo", "Tarjeta"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 48, 
        nombre: "YPF GAS-TOM", 
        categoria: "Estación de Servicio",
        direccion: "Chacabuco 1631", 
        coordenadas: [-30.8704, -64.5259],
        telefono: null, 
        whatsapp: "+5493548400545", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: true, 
        deliveryInfo: "Sin Cargo", horario: "Lun-Sáb 9:00 - 13:30 / 17:00 - 20:30 / Dom 10:00 - 14:00 / 18:00 - 21:00",
        descripcion: "Venta y llenado de garrafas de 10kg, 15kg, 45kg.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 49, 
        nombre: "Totalgaz", 
        categoria: "Carga de Garrafa",
        direccion: "Leandro N. Alem 1101", 
        coordenadas: [-30.8683, -64.5264],
        telefono: "+5493548481197", 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: "8:00 - 20:00 | $300", horario: "Lun-Sáb 8:00-20:00",
        descripcion: "Proveedor de cilindros de gas.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    },*/
    /*{
        id: 50, 
        nombre: "Kiosco Central", 
        categoria: "Kiosco",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493513456789", 
        whatsapp: "+5493513456789", 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "Lun-Dom 6:00-00:00",
        descripcion: "El kiosco de la plaza con todo lo que necesitás.",
        metodoPago: ["Efectivo", "MercadoPago"],
         iconos: [
        { nombre: "Café", icono: "fa-coffee", color: "#6F4E37" },
        { nombre: "Estacionamiento", icono: "fa-parking", color: "#4CAF50" },
        { nombre: "Cámaras", icono: "fa-camera", color: "#FF9800" },
        { nombre: "Cubierto", icono: "fa-umbrella", color: "#2196F3" },
        { nombre: "Accesibilidad", icono: "fa-wheelchair", color: "#9C27B0" },
        { nombre: "Mascotas", icono: "fa-paw", color: "#FF9800" },
        { nombre: "Delivery", icono: "fa-motorcycle", color: "#4CAF50" },
        { nombre: "Piscina", icono: "fa-swimming-pool", color: "#00BCD4" }
    ]
    }*/
];

// ============================================================
//  2. EVENTOS - 50 con estructura completa
// ============================================================
const eventos = [
    {
        id: 100, 
        nombre: "Un Combo de Pelicula en Cine Teatro Enrique munio", 
        categoria: "Evento",
        direccion: "Dean funes 526", 
        coordenadas: [-30.858812, -64.524938],
        telefono: null, 
        whatsapp: "+549354815582506", 
        instagram: "@turismocapilla",
        facebook: "turismocapilla", 
        twitter: null, 
        website: "//turismocapilla.gob.ar/cine/",
        delivery: false, 
        deliveryInfo: null, 
        horario: "Evento todo el día",
        descripcion: "¡Aprovechá esta oportunidad única para vivir una experiencia completa!.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://turismocapilla.gob.ar/wp-content/uploads/2025/09/capilla1-1536x555.jpg", 
        fecha: "Miercoles 4 de Septiembre 2026"
    },
    {
        id: 101, 
        nombre: "Encuentro de Artesanos", 
        categoria: "Evento",
        direccion: "Calle Techada - Plaza Central", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@artesanoscapilla",
        facebook: "ArtesanosCapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, horario: "09:00 - 20:00",
        descripcion: "Exposición y venta de artesanías locales. Productos únicos hechos a mano.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento101/400/200", 
        fecha: "22 de Marzo"
    },
    {
        id: 102, 
        nombre: "Noche de Música en Vivo", 
        categoria: "Evento",
        direccion: "Brida Bar - Café", 
        coordenadas: [-30.8599, -64.5236],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", instagram: "@bridabarcafe",
        facebook: "BridaBar", 
        twitter: null, 
        website: "www.bridabarcafe.com",
        delivery: false, 
        deliveryInfo: null, 
        horario: "21:00 - 02:00",
        descripcion: "Noche de música en vivo con artistas locales. Ambiente bohemio y excelente gastronomía.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento102/400/200", 
        fecha: "5 de Abril"
    },
    {
        id: 103, 
        nombre: "Exposición de Pintura", 
        categoria: "Evento",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548456789", 
        whatsapp: null, 
        instagram: "@museocapilla",
        facebook: "museocapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Exposición de pintura de artistas locales y regionales. Obras de arte contemporáneo.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento103/400/200", 
        fecha: "12 de Abril"
    },
    {
        id: 104, 
        nombre: "Feria de Productos Regionales", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@productosregionales",
        facebook: "FeriaRegionalCapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "08:00 - 19:00",
        descripcion: "Feria con productos típicos de la región. Alimentos, bebidas y artesanías.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento104/400/200", 
        fecha: "20 de Abril"
    },
    {
        id: 105, 
        nombre: "Concierto de Guitarra", 
        categoria: "Evento",
        direccion: "Parroquia San Antonio", 
        coordenadas: [-30.8580, -64.5203],
        telefono: "+543548481103", 
        whatsapp: null, 
        instagram: null,
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, horario: "20:00 - 22:00",
        descripcion: "Concierto de guitarra clásica en la parroquia. Música para disfrutar en familia.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento105/400/200", 
        fecha: "28 de Abril"
    },
    {
        id: 106, 
        nombre: "Taller de Cerámica", 
        categoria: "Evento",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@ceramicacapilla",
        facebook: "TallerCeramica", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "15:00 - 18:00",
        descripcion: "Taller de cerámica para todas las edades. Aprende a crear tus propias piezas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento106/400/200", 
        fecha: "5 de Mayo"
    },
    {
        id: 107, 
        nombre: "Muestra Fotográfica", 
        categoria: "Evento",
        direccion: "Sala de Exposiciones Municipal", 
        coordenadas: [-30.8565, -64.5245],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@fotocapilla",
        facebook: "MuestraFotografica", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 20:00",
        descripcion: "Muestra de fotografía de paisajes y cultura de Capilla del Monte.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento107/400/200", 
        fecha: "12 de Mayo"
    },
    {
        id: 108, 
        nombre: "Festival de Folklore", 
        categoria: "Evento",
        direccion: "Anfiteatro Municipal", 
        coordenadas: [-30.8550, -64.5220],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@folkcapilla",
        facebook: "FestivalFolklore", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "18:00 - 00:00",
        descripcion: "Festival de folklore con bailes y música típica. Participan artistas de toda la región.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento108/400/200", 
        fecha: "20 de Mayo"
    },
    {
        id: 109, 
        nombre: "Cine Bajo las Estrellas", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@cinebajoestrellas",
        facebook: "CineEstrellas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "20:00 - 23:00",
        descripcion: "Proyección de películas al aire libre. Trae tu manta y disfruta del cine bajo las estrellas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento109/400/200", 
        fecha: "2 de Junio"
    },
    {
        id: 110, 
        nombre: "Feria del Libro", 
        categoria: "Evento",
        direccion: "Salón Municipal", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@feriadellibrocapilla",
        facebook: "FeriaDelLibro", 
        twitter: null, 
        website: "www.feriadellibrocapilla.com",
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 20:00",
        descripcion: "Feria del libro con editoriales locales. Charlas, firmas de autores y actividades para niños.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento110/400/200", 
        fecha: "15 de Junio"
    },
    {
        id: 111, 
        nombre: "Encuentro de Danza", 
        categoria: "Evento",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@danzacapilla",
        facebook: "EncuentroDanza", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "16:00 - 21:00",
        descripcion: "Encuentro de danza con diferentes estilos. Clases abiertas y exhibiciones.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento111/400/200", 
        fecha: "22 de Junio"
    },
    {
        id: 112, 
        nombre: "Fiesta de la Cerveza", 
        categoria: "Evento",
        direccion: "Cervecería La Cumbre", 
        coordenadas: [-30.8585, -64.5245],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@cerveceralacumbre",
        facebook: "CerveceríaLaCumbre", 
        twitter: null, 
        website: "www.lacumbrecerveza.com",
        delivery: false, 
        deliveryInfo: null, 
        horario: "18:00 - 02:00",
        descripcion: "Fiesta de la cerveza artesanal con degustaciones y música en vivo.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento112/400/200", 
        fecha: "30 de Junio"
    },
    {
        id: 113, 
        nombre: "Exhibición de Arte", 
        categoria: "Evento",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548345678", 
        whatsapp: null, 
        instagram: "@museocapilla",
        facebook: "museocapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Exhibición de arte contemporáneo con artistas emergentes de la región.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento113/400/200", 
        fecha: "8 de Julio"
    },
    {
        id: 114, 
        nombre: "Noche de Poesía", 
        categoria: "Evento",
        direccion: "Café del Cerro", 
        coordenadas: [-30.8601, -64.5233],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@cafedelcerrocdm",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "20:00 - 23:00",
        descripcion: "Noche de poesía con lectura de poemas y micrófono abierto.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento114/400/200", 
        fecha: "15 de Julio"
    },
    {
        id: 115, 
        nombre: "Taller de Yoga", 
        categoria: "Evento",
        direccion: "Cerro Uritorco - Base", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@yogauritorco",
        facebook: "YogaCapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "07:00 - 09:00",
        descripcion: "Taller de yoga al amanecer en la base del cerro Uritorco. Energía y conexión con la naturaleza.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento115/400/200", 
        fecha: "22 de Julio"
    },
    {
        id: 116, 
        nombre: "Eco-Feria", 
        categoria: "Evento",
        direccion: "Parque del Cerro", 
        coordenadas: [-30.8520, -64.5100],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", instagram: "@ecoferiacapilla",
        facebook: "EcoFeria", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 18:00",
        descripcion: "Feria ecológica con productos sustentables, reciclaje y concientización ambiental.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento116/400/200", 
        fecha: "5 de Agosto"
    },
    {
        id: 117, 
        nombre: "Festival Infantil", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@festivalinfantil",
        facebook: "FestivalInfantil", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "14:00 - 19:00",
        descripcion: "Festival para niños con juegos, actividades y espectáculos infantiles.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento117/400/200", 
        fecha: "12 de Agosto"
    },
    {
        id: 118, 
        nombre: "Fiesta del Chocolate", 
        categoria: "Evento",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@chocolatecapilla",
        facebook: "FiestaChocolate", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 22:00",
        descripcion: "Fiesta del chocolate con degustaciones, talleres y concursos.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento118/400/200", 
        fecha: "20 de Agosto"
    },
    {
        id: 119, 
        nombre: "Encuentro de Escritores", 
        categoria: "Evento",
        direccion: "Biblioteca Municipal", 
        coordenadas: [-30.8570, -64.5240],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@escritorescapilla",
        facebook: "EncuentroEscritores", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "17:00 - 21:00",
        descripcion: "Encuentro de escritores locales. Lectura de obras y charlas literarias.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento119/400/200", 
        fecha: "28 de Agosto"
    },
    {
        id: 120, 
        nombre: "Noche de Jazz", 
        categoria: "Evento",
        direccion: "Mala Mía", 
        coordenadas: [-30.8623, -64.5246],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@malamia",
        facebook: null, 
        twitter: null, 
        website: "www.malamia.com.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "21:00 - 02:00",
        descripcion: "Noche de jazz en vivo con los mejores músicos de la región.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento120/400/200", 
        fecha: "5 de Septiembre"
    },
    {
        id: 121, 
        nombre: "Feria de Emprendedores", 
        categoria: "Evento",
        direccion: "Salón Municipal", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@emprendedorescapilla",
        facebook: "FeriaEmprendedores", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 20:00",
        descripcion: "Feria de emprendedores locales con productos y servicios innovadores.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento121/400/200", 
        fecha: "12 de Septiembre"
    },
    {
        id: 122, 
        nombre: "Exposición de Esculturas", 
        categoria: "Evento",
        direccion: "Parque del Cerro", 
        coordenadas: [-30.8520, -64.5100],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@esculturascapilla",
        facebook: "ExpoEsculturas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Exposición de esculturas al aire libre. Obras de artistas locales.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento122/400/200", 
        fecha: "20 de Septiembre"
    },
    {
        id: 123, 
        nombre: "Festival de Teatro", 
        categoria: "Evento",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@teatrocapilla",
        facebook: "FestivalTeatro", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "18:00 - 23:00",
        descripcion: "Festival de teatro con obras de compañías locales y regionales.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento123/400/200", 
        fecha: "28 de Septiembre"
    },
    {
        id: 124, 
        nombre: "Fiesta del Pan", 
        categoria: "Evento",
        direccion: "Panadería Los Nonos", 
        coordenadas: [-30.8611, -64.5239],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@losnonospan",
        facebook: "PanaderíaLosNonos", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "08:00 - 14:00",
        descripcion: "Fiesta del pan con degustación de panes artesanales y talleres de panadería.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento124/400/200", 
        fecha: "5 de Octubre"
    },
    {
        id: 125, 
        nombre: "Encuentro de Fotografía", 
        categoria: "Evento",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@fotocapilla",
        facebook: "EncuentroFotografia", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Encuentro de fotografía con talleres y exhibiciones de fotógrafos locales.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento125/400/200", 
        fecha: "12 de Octubre"
    },
    {
        id: 126, 
        nombre: "Noche de Tango", 
        categoria: "Evento",
        direccion: "Brida Bar", 
        coordenadas: [-30.8599, -64.5236],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@tangoenelbar",
        facebook: "NocheTango", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "21:00 - 01:00",
        descripcion: "Noche de tango con música en vivo y clase abierta para principiantes.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento126/400/200", 
        fecha: "20 de Octubre"
    },
    {
        id: 127, 
        nombre: "Feria de Semillas", 
        categoria: "Evento",
        direccion: "Eco Camping", 
        coordenadas: [-30.8563, -64.5203],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@semillascapilla",
        facebook: "FeriaSemillas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 17:00",
        descripcion: "Feria de semillas nativas y plantas autóctonas. Talleres de huerta y jardinería.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento127/400/200", 
        fecha: "28 de Octubre"
    },
    {
        id: 128, 
        nombre: "Exhibición de Artesanías", 
        categoria: "Evento",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@artesaniascapilla",
        facebook: "ExpoArtesanias", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 20:00",
        descripcion: "Exhibición de artesanías locales con demostraciones en vivo.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento128/400/200", 
        fecha: "5 de Noviembre"
    },
    {
        id: 129, 
        nombre: "Festival de la Cerveza Artesanal", 
        categoria: "Evento",
        direccion: "Cervecería La Cumbre", 
        coordenadas: [-30.8585, -64.5245],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@cerveceralacumbre",
        facebook: "CerveceríaLaCumbre", 
        twitter: "@cerveceralacumbre", 
        website: "www.lacumbrecerveza.com",
        delivery: false, 
        deliveryInfo: null, 
        horario: "18:00 - 02:00",
        descripcion: "Festival de cerveza artesanal con más de 20 variedades de cerveza y música en vivo.",
        metodoPago: ["Efectivo", "MercadoPago", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento129/400/200", 
        fecha: "12 de Noviembre"
    },
    {
        id: 130, 
        nombre: "Taller de Permacultura", 
        categoria: "Evento",
        direccion: "Eco Camping", 
        coordenadas: [-30.8563, -64.5203],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@permaculturacapilla",
        facebook: "TallerPermacultura", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 13:00",
        descripcion: "Taller de permacultura y diseño sustentable. Aprende a vivir en armonía con la naturaleza.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento130/400/200", 
        fecha: "20 de Noviembre"
    },
    {
        id: 131, 
        nombre: "Muestra de Cine Independiente", 
        categoria: "Evento",
        direccion: "Salón Municipal", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@cineindependiente",
        facebook: "CineIndependiente", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "19:00 - 22:00",
        descripcion: "Muestra de cine independiente con cortometrajes y largometrajes de realizadores locales.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento131/400/200", 
        fecha: "28 de Noviembre"
    },
    {
        id: 132, 
        nombre: "Fiesta del Olivo", 
        categoria: "Evento",
        direccion: "Ruta 38 - Finca El Olivo", 
        coordenadas: [-30.8700, -64.5300],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@olivocapilla",
        facebook: "FiestaOlivo", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Fiesta del olivo con degustación de aceite de oliva y productos derivados.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento132/400/200", 
        fecha: "5 de Diciembre"
    },
    {
        id: 133, 
        nombre: "Encuentro de Muralistas", 
        categoria: "Evento",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@muralistascapilla",
        facebook: "EncuentroMuralistas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 19:00",
        descripcion: "Encuentro de muralistas con pintura en vivo y creación de murales colectivos.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento133/400/200", 
        fecha: "12 de Diciembre"
    },
    {
        id: 134, 
        nombre: "Noche de Cómic", 
        categoria: "Evento",
        direccion: "Biblioteca Municipal", 
        coordenadas: [-30.8570, -64.5240],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@comiccapilla",
        facebook: "NocheComic", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "18:00 - 22:00",
        descripcion: "Noche de cómic con exhibición, venta y charlas sobre el mundo del cómic.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento134/400/200", 
        fecha: "20 de Diciembre"
    },
    {
        id: 135, 
        nombre: "Feria de Mascotas", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@mascotascapilla",
        facebook: "FeriaMascotas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 18:00",
        descripcion: "Feria de mascotas con adopción, servicios veterinarios y actividades para mascotas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento135/400/200", 
        fecha: "28 de Diciembre"
    },
    {
        id: 136, 
        nombre: "Festival del Vino", 
        categoria: "Evento",
        direccion: "Bodega El Mirador", 
        coordenadas: [-30.8520, -64.5100],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@vinocapilla",
        facebook: "FestivalVino", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "15:00 - 22:00",
        descripcion: "Festival del vino con degustaciones de vinos regionales y maridaje.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento136/400/200", 
        fecha: "10 de Enero"
    },
    {
        id: 137, 
        nombre: "Exposición de Jardinería", 
        categoria: "Evento",
        direccion: "Parque del Cerro", 
        coordenadas: [-30.8520, -64.5100],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@jardineriacapilla",
        facebook: "ExpoJardineria", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 18:00",
        descripcion: "Exposición de jardinería con plantas, flores y talleres de jardinería.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento137/400/200", 
        fecha: "18 de Enero"
    },
    {
        id: 138, 
        nombre: "Fiesta de la Primavera", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@primaveracapilla",
        facebook: "FiestaPrimavera", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 22:00",
        descripcion: "Fiesta de la primavera con música, flores y actividades para toda la familia.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento138/400/200", 
        fecha: "25 de Enero"
    },
    {
        id: 139, 
        nombre: "Encuentro de Reciclaje", 
        categoria: "Evento",
        direccion: "Eco Camping", 
        coordenadas: [-30.8563, -64.5203],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@reciclajecapilla",
        facebook: "EncuentroReciclaje", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 15:00",
        descripcion: "Encuentro de reciclaje con talleres de reutilización y concientización ambiental.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento139/400/200", 
        fecha: "2 de Febrero"
    },
    {
        id: 140, 
        nombre: "Noche de Cuentos", 
        categoria: "Evento",
        direccion: "Biblioteca Municipal", 
        coordenadas: [-30.8570, -64.5240],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@cuentoscapilla",
        facebook: "NocheCuentos", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "19:00 - 22:00",
        descripcion: "Noche de cuentos con narradores locales. Cuentos para grandes y chicos.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento140/400/200", 
        fecha: "10 de Febrero"
    },
    {
        id: 141, 
        nombre: "Feria de Antigüedades", 
        categoria: "Evento",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@antiguedadescapilla",
        facebook: "FeriaAntiguedades", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 19:00",
        descripcion: "Feria de antigüedades con objetos de colección y reliquias históricas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento141/400/200", 
        fecha: "18 de Febrero"
    },
    {
        id: 142, 
        nombre: "Festival de la Luna", 
        categoria: "Evento",
        direccion: "Cerro Uritorco - Cima", 
        coordenadas: [-30.8400, -64.4900],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@lunacapilla",
        facebook: "FestivalLuna", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "20:00 - 00:00",
        descripcion: "Festival de la luna con observación astronómica y actividades nocturnas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento142/400/200", 
        fecha: "25 de Febrero"
    },
    {
        id: 143, 
        nombre: "Taller de Huerta", 
        categoria: "Evento",
        direccion: "Eco Camping", 
        coordenadas: [-30.8563, -64.5203],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@huertacapilla",
        facebook: "TallerHuerta", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 12:00",
        descripcion: "Taller de huerta orgánica. Aprende a cultivar tus propios alimentos.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento143/400/200", 
        fecha: "5 de Marzo"
    },
    {
        id: 144, 
        nombre: "Muestra de Animales", 
        categoria: "Evento",
        direccion: "Parque del Cerro", 
        coordenadas: [-30.8520, -64.5100],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@animalescapilla",
        facebook: "MuestraAnimales", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 17:00",
        descripcion: "Muestra de animales con exhibición de especies nativas y charlas educativas.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento144/400/200", 
        fecha: "12 de Marzo"
    },
    {
        id: 145, 
        nombre: "Fiesta del Deporte", 
        categoria: "Evento",
        direccion: "Polideportivo Municipal", 
        coordenadas: [-30.8540, -64.5200],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@deportecapilla",
        facebook: "FiestaDeporte", 
        twitter: null, website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 20:00",
        descripcion: "Fiesta del deporte con actividades deportivas y torneos para todas las edades.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/evento145/400/200", 
        fecha: "20 de Marzo"
    },
    {
        id: 146, 
        nombre: "Encuentro de Cocina", 
        categoria: "Evento",
        direccion: "Restaurante Camon", 
        coordenadas: [-30.8595, -64.5236],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@cocinacapilla",
        facebook: "EncuentroCocina", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "16:00 - 21:00",
        descripcion: "Encuentro de cocina con demostraciones de chefs locales y degustaciones.",
        metodoPago: ["Efectivo", "Tarjeta"], 
        foto: "https://picsum.photos/seed/evento146/400/200", 
        fecha: "28 de Marzo"
    },
    {
        id: 147, 
        nombre: "Noche de Magia", 
        categoria: "Evento",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@magiacapilla",
        facebook: "NocheMagia", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "20:00 - 23:00",
        descripcion: "Noche de magia con espectáculo de ilusionismo y magia en vivo.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento147/400/200", 
        fecha: "5 de Abril"
    },
    {
        id: 148, 
        nombre: "Feria de Juguetes", 
        categoria: "Evento",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@juguetescapilla",
        facebook: "FeriaJuguetes", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "10:00 - 19:00",
        descripcion: "Feria de juguetes con juegos didácticos y actividades para niños.",
        metodoPago: ["Efectivo", "MercadoPago"], 
        foto: "https://picsum.photos/seed/evento148/400/200", 
        fecha: "12 de Abril"
    },
    {
        id: 149, 
        nombre: "Festival de la Montaña", 
        categoria: "Evento",
        direccion: "Cerro Uritorco - Base", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@montañacapilla",
        facebook: "FestivalMontaña", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "08:00 - 20:00",
        descripcion: "Festival de la montaña con senderismo, escalada y actividades de aventura.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/evento149/400/200", 
        fecha: "20 de Abril"
    }
];

// ============================================================
//  3. NOVEDADES - 50 con estructura completa
// ============================================================
const novedades = [
    {
        id: 200, 
        nombre: "Nuevo sendero habilitado", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco - Sector Norte", 
        coordenadas: [-30.8420, -64.4900],
        telefono: null, 
        whatsapp: null, 
        instagram: "@nuevosenderos",
        facebook: "NuevoSenderoCapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se ha habilitado un nuevo sendero de dificultad media con vistas panorámicas al valle. Ideal para fotografía y avistaje de aves.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad200/400/200", 
        fecha: "10 de Febrero"
    },
    {
        id: 201, 
        nombre: "Campaña de limpieza del cerro", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco - Todo el recorrido", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@limpiezacerro",
        facebook: "LimpiezaCerro", 
        twitter: null, website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 14:00",
        descripcion: "Campaña de limpieza del cerro Uritorco. Invitamos a todos los vecinos y visitantes a participar.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad201/400/200", 
        fecha: "15 de Febrero"
    },
    {
        id: 202, 
        nombre: "Nueva guía turística disponible", 
        categoria: "Novedad",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548614515", 
        whatsapp: "+5493548614515", 
        instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", 
        twitter: null, 
        website: "turismocapilla.gob.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: "08:00 - 20:00",
        descripcion: "Nueva guía turística de Capilla del Monte con información actualizada de todos los atractivos.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad202/400/200", 
        fecha: "20 de Febrero"
    },
    {
        id: 203, 
        nombre: "Convocatoria a artistas", 
        categoria: "Novedad",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@artistasconvocatoria",
        facebook: "ConvocatoriaArtistas", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Convocatoria abierta a artistas locales para exposiciones y muestras durante todo el año.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad203/400/200", 
        fecha: "25 de Febrero"
    },
    {
        id: 204, 
        nombre: "Mejoras en la calle techada", 
        categoria: "Novedad",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: null, 
        whatsapp: null, 
        instagram: "@calletechada",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se están realizando mejoras en la calle techada con nueva iluminación y renovación de espacios.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad204/400/200", 
        fecha: "1 de Marzo"
    },
    {
        id: 205, 
        nombre: "Nuevos carteles informativos", 
        categoria: "Novedad",
        direccion: "Todo el circuito turístico", 
        coordenadas: [-30.8580, -64.5240],
        telefono: null, 
        whatsapp: null, 
        instagram: "@cartelescapilla",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Instalación de nuevos carteles informativos en todo el circuito turístico de Capilla del Monte.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad205/400/200", 
        fecha: "5 de Marzo"
    },
    {
        id: 206, 
        nombre: "Taller gratuito de fotografía", 
        categoria: "Novedad",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@fotocapilla",
        facebook: "TallerFotografia", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "15:00 - 18:00",
        descripcion: "Taller gratuito de fotografía para principiantes. Aprende a capturar los mejores paisajes.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad206/400/200", 
        fecha: "10 de Marzo"
    },
    {
        id: 207, 
        nombre: "Nuevo punto de información", 
        categoria: "Novedad",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@infocapilla",
        facebook: "PuntoInformacion", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 18:00",
        descripcion: "Nuevo punto de información turística en la plaza central con atención personalizada.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad207/400/200", 
        fecha: "15 de Marzo"
    },
    {
        id: 208, 
        nombre: "Restauración del museo", 
        categoria: "Novedad",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548567890", 
        whatsapp: null, 
        instagram: "@museocapilla",
        facebook: "museocapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Trabajos de restauración en el museo de la ciudad para preservar el patrimonio histórico.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad208/400/200", 
        fecha: "20 de Marzo"
    },
    {
        id: 209, 
        nombre: "Nueva aplicación móvil", 
        categoria: "Novedad",
        direccion: "Municipalidad", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@appcapilla",
        facebook: "AppCapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Lanzamiento de la nueva aplicación móvil de Capilla del Monte con toda la información turística.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad209/400/200", 
        fecha: "25 de Marzo"
    },
    {
        id: 210, 
        nombre: "Campaña de reciclaje", 
        categoria: "Novedad",
        direccion: "Todo el municipio", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@reciclajecapilla",
        facebook: "CampañaReciclaje", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Campaña de reciclaje en todo el municipio. Puntos de recolección de residuos reciclables.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad210/400/200", 
        fecha: "30 de Marzo"
    },
    {
        id: 211, 
        nombre: "Nuevo espacio verde", 
        categoria: "Novedad",
        direccion: "Barrio San Antonio", 
        coordenadas: [-30.8550, -64.5200],
        telefono: null, 
        whatsapp: null, 
        instagram: "@espacioverde",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Inauguración de un nuevo espacio verde con juegos infantiles y áreas de descanso.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad211/400/200", 
        fecha: "5 de Abril"
    },
    {
        id: 212, 
        nombre: "Concurso de fotografía", 
        categoria: "Novedad",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@concursofoto",
        facebook: "ConcursoFotografia", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Concurso de fotografía de paisajes de Capilla del Monte. Premios para los mejores trabajos.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad212/400/200", 
        fecha: "10 de Abril"
    },
    {
        id: 213, 
        nombre: "Nuevo circuito de senderismo", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@senderismocapilla",
        facebook: "CircuitoSenderismo", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Nuevo circuito de senderismo de dificultad baja con accesibilidad para personas con movilidad reducida.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad213/400/200", 
        fecha: "15 de Abril"
    },
    {
        id: 214, 
        nombre: "Campaña de prevención", 
        categoria: "Novedad",
        direccion: "Todo el municipio", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@prevencioncapilla",
        facebook: "CampañaPrevencion", 
        twitter: null, website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Campaña de prevención de incendios forestales. Información y concientización para visitantes.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad214/400/200", 
        fecha: "20 de Abril"
    },
    {
        id: 215, 
        nombre: "Nuevo centro de interpretación", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco - Base", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@interpretacioncerro",
        facebook: "CentroInterpretacion", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 17:00",
        descripcion: "Nuevo centro de interpretación del cerro Uritorco con información geológica y cultural.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad215/400/200", 
        fecha: "25 de Abril"
    },
    {
        id: 216, 
        nombre: "Taller de artesanías", 
        categoria: "Novedad",
        direccion: "Calle Techada", 
        coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@artesaniascapilla",
        facebook: "TallerArtesanias", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "14:00 - 18:00",
        descripcion: "Taller de artesanías en la calle techada. Aprende técnicas tradicionales.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/novedad216/400/200", 
        fecha: "30 de Abril"
    },
    {
        id: 217, 
        nombre: "Mejoras en la plaza", 
        categoria: "Novedad",
        direccion: "Plaza Central", 
        coordenadas: [-30.8560, -64.5250],
        telefono: null, 
        whatsapp: null, 
        instagram: "@plazacapilla",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Mejoras en la plaza central con nuevo mobiliario urbano y jardinería.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad217/400/200", 
        fecha: "5 de Mayo"
    },
    {
        id: 218, 
        nombre: "Nueva señalética", 
        categoria: "Novedad",
        direccion: "Todo el circuito turístico", 
        coordenadas: [-30.8580, -64.5240],
        telefono: null, 
        whatsapp: null, 
        instagram: "@senaletica",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Instalación de nueva señalética turística en todo el circuito de Capilla del Monte.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad218/400/200", 
        fecha: "10 de Mayo"
    },
    {
        id: 219, 
        nombre: "Campaña de reforestación", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@reforestacioncapilla",
        facebook: "CampañaReforestacion", 
        twitter: null, website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 13:00",
        descripcion: "Campaña de reforestación en el cerro Uritorco. Plantación de especies nativas.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad219/400/200", 
        fecha: "15 de Mayo"
    },
    {
        id: 220, 
        nombre: "Nuevo mirador", 
        categoria: "Novedad",
        direccion: "Cerro Uritorco - Sector Sur", 
        coordenadas: [-30.8480, -64.4920],
        telefono: null, 
        whatsapp: null, 
        instagram: "@miradorsur",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Nuevo mirador en el sector sur del cerro Uritorco con vistas espectaculares al valle.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad220/400/200", 
        fecha: "20 de Mayo"
    },
    {
        id: 221, 
        nombre: "Taller de gastronomía", 
        categoria: "Novedad",
        direccion: "Restaurante Camon", 
        coordenadas: [-30.8595, -64.5236],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@gastronomiacapilla",
        facebook: "TallerGastronomia", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "16:00 - 20:00",
        descripcion: "Taller de gastronomía regional. Aprende a preparar platos típicos de Capilla del Monte.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/novedad221/400/200", 
        fecha: "25 de Mayo"
    },
    {
        id: 222, 
        nombre: "Nuevo paseo peatonal", 
        categoria: "Novedad",
        direccion: "Calle Sarmiento", 
        coordenadas: [-30.8570, -64.5250],
        telefono: null, 
        whatsapp: null, 
        instagram: "@paseopeatonal",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Nuevo paseo peatonal en la calle Sarmiento con espacios de descanso y comercios.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad222/400/200", 
        fecha: "30 de Mayo"
    },
    {
        id: 223, 
        nombre: "Campaña de limpieza del río", 
        categoria: "Novedad",
        direccion: "Río Capilla", 
        coordenadas: [-30.8550, -64.5200],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@limpiezario",
        facebook: "LimpiezaRio", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 14:00",
        descripcion: "Campaña de limpieza del río Capilla. Jornada de concientización y recolección de residuos.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad223/400/200", 
        fecha: "5 de Junio"
    },
    {
        id: 224, 
        nombre: "Nuevo espacio cultural", 
        categoria: "Novedad",
        direccion: "Barrio El Cerro", 
        coordenadas: [-30.8530, -64.5180],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@espaciocultural",
        facebook: "EspacioCultural", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Inauguración de nuevo espacio cultural con sala de exposiciones y auditorio.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad224/400/200", 
        fecha: "10 de Junio"
    },
    {
        id: 225, 
        nombre: "Taller de danza", 
        categoria: "Novedad",
        direccion: "Centro Cultural", 
        coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@danzacapilla",
        facebook: "TallerDanza", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "17:00 - 20:00",
        descripcion: "Taller de danza con diferentes estilos. Clases para todas las edades.",
        metodoPago: ["Efectivo"], 
        foto: "https://picsum.photos/seed/novedad225/400/200", 
        fecha: "15 de Junio"
    },
    {
        id: 226, 
        nombre: "Mejoras en el camping", 
        categoria: "Novedad",
        direccion: "Eco Camping Calabalumba", 
        coordenadas: [-30.8563, -64.5203],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@ecocampingcalabalumba",
        facebook: "100076537416590", 
        twitter: null, 
        website: "eco-camping-calabalumba5.webnode.page",
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Mejoras en el Eco Camping con nuevas parcelas y servicios para visitantes.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad226/400/200", 
        fecha: "20 de Junio"
    },
    {
        id: 227, 
        nombre: "Nueva exposición permanente", 
        categoria: "Novedad",
        direccion: "Museo de la Ciudad", 
        coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548901234", 
        whatsapp: "+5493548901234", 
        instagram: "@museocapilla",
        facebook: "museocapilla", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Nueva exposición permanente en el museo con piezas históricas de la región.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad227/400/200", 
        fecha: "25 de Junio"
    },
    {
        id: 228, 
        nombre: "Campaña de turismo sustentable", 
        categoria: "Novedad",
        direccion: "Todo el municipio", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548012345", 
        whatsapp: "+5493548012345", 
        instagram: "@turismosustentable",
        facebook: "TurismoSustentable", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Campaña de turismo sustentable para promover prácticas responsables entre visitantes.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad228/400/200", 
        fecha: "30 de Junio"
    },
    {
        id: 229, 
        nombre: "Nuevo audioguía", 
        categoria: "Novedad",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@audioguia",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Nuevo servicio de audioguía para recorridos turísticos disponible en varios idiomas.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/novedad229/400/200", 
        fecha: "5 de Julio"
    },
    /*{
        id: 230, nombre: "Taller de pintura", categoria: "Novedad",
        direccion: "Centro Cultural", coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@pinturacapilla",
        facebook: "TallerPintura", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "15:00 - 18:00",
        descripcion: "Taller de pintura para principiantes. Técnicas de acuarela y óleo.",
        metodoPago: ["Efectivo"], foto: "https://picsum.photos/seed/novedad230/400/200", fecha: "10 de Julio"
    },
    {
        id: 231, nombre: "Nuevo sendero interpretativo", categoria: "Novedad",
        direccion: "Cerro Uritorco", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@senderointerpretativo",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nuevo sendero interpretativo con carteles informativos sobre flora y fauna local.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad231/400/200", fecha: "15 de Julio"
    },
    {
        id: 232, nombre: "Campaña de recolección de residuos", categoria: "Novedad",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@reciclajecapilla",
        facebook: "RecoleccionResiduos", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Campaña de recolección de residuos con nuevos puntos de reciclaje en toda la ciudad.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad232/400/200", fecha: "20 de Julio"
    },
    {
        id: 233, nombre: "Nuevo centro de visitantes", categoria: "Novedad",
        direccion: "Cerro Uritorco - Base", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@centrovisitantes",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "09:00 - 18:00",
        descripcion: "Nuevo centro de visitantes con información turística y servicios para excursionistas.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad233/400/200", fecha: "25 de Julio"
    },
    {
        id: 234, nombre: "Taller de astronomía", categoria: "Novedad",
        direccion: "Cerro Uritorco - Cima", coordenadas: [-30.8400, -64.4900],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@astronomiacapilla",
        facebook: "TallerAstronomia", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "20:00 - 23:00",
        descripcion: "Taller de astronomía con observación de estrellas y planetas desde el cerro.",
        metodoPago: ["Efectivo"], foto: "https://picsum.photos/seed/novedad234/400/200", fecha: "30 de Julio"
    },
    {
        id: 235, nombre: "Mejoras en la iluminación", categoria: "Novedad",
        direccion: "Calle Techada", coordenadas: [-30.8596, -64.5238],
        telefono: null, whatsapp: null, instagram: "@iluminacioncapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Mejoras en la iluminación de la calle techada con luces LED de bajo consumo.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad235/400/200", fecha: "5 de Agosto"
    },
    {
        id: 236, nombre: "Nueva guía de senderos", categoria: "Novedad",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548789012", whatsapp: "+5493548789012", instagram: "@guiadesenderos",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nueva guía de senderos con mapas detallados de todas las rutas de trekking.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad236/400/200", fecha: "10 de Agosto"
    },
    {
        id: 237, nombre: "Campaña de conservación", categoria: "Novedad",
        direccion: "Cerro Uritorco", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@conservacioncerro",
        facebook: "CampañaConservacion", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Campaña de conservación del cerro Uritorco con actividades de preservación.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad237/400/200", fecha: "15 de Agosto"
    },
    {
        id: 238, nombre: "Nuevo espacio de juegos", categoria: "Novedad",
        direccion: "Parque del Cerro", coordenadas: [-30.8520, -64.5100],
        telefono: null, whatsapp: null, instagram: "@juegosinfantiles",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nuevo espacio de juegos infantiles en el parque del cerro con equipamiento moderno.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad238/400/200", fecha: "20 de Agosto"
    },
    {
        id: 239, nombre: "Taller de cerámica", categoria: "Novedad",
        direccion: "Centro Cultural", coordenadas: [-30.8575, -64.5230],
        telefono: "+5493548901234", whatsapp: "+5493548901234", instagram: "@ceramicacapilla",
        facebook: "TallerCeramica", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "14:00 - 17:00",
        descripcion: "Taller de cerámica con técnicas de modelado y decoración.",
        metodoPago: ["Efectivo"], foto: "https://picsum.photos/seed/novedad239/400/200", fecha: "25 de Agosto"
    },
    {
        id: 240, nombre: "Nuevo mural comunitario", categoria: "Novedad",
        direccion: "Calle Techada", coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548012345", whatsapp: "+5493548012345", instagram: "@muralcomunitario",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Pintura de nuevo mural comunitario con participación de artistas y vecinos.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad240/400/200", fecha: "30 de Agosto"
    },
    {
        id: 241, nombre: "Campaña de cuidado del cerro", categoria: "Novedad",
        direccion: "Cerro Uritorco", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548123456", whatsapp: "+5493548123456", instagram: "@cuidacerro",
        facebook: "CuidadoCerro", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Campaña de cuidado del cerro Uritorco con recomendaciones para visitantes.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad241/400/200", fecha: "5 de Septiembre"
    },
    {
        id: 242, nombre: "Nuevo punto de avistaje", categoria: "Novedad",
        direccion: "Cerro Uritorco - Sector Este", coordenadas: [-30.8440, -64.4930],
        telefono: null, whatsapp: null, instagram: "@avistajecapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nuevo punto de avistaje de aves y animales silvestres en el cerro Uritorco.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad242/400/200", fecha: "10 de Septiembre"
    },
    {
        id: 243, nombre: "Taller de yoga", categoria: "Novedad",
        direccion: "Cerro Uritorco - Base", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@yogacapilla",
        facebook: "TallerYoga", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "07:00 - 09:00",
        descripcion: "Taller de yoga al amanecer en la base del cerro. Conexión con la naturaleza.",
        metodoPago: ["Efectivo"], foto: "https://picsum.photos/seed/novedad243/400/200", fecha: "15 de Septiembre"
    },
    {
        id: 244, nombre: "Mejoras en el acceso", categoria: "Novedad",
        direccion: "Camino al Uritorco", coordenadas: [-30.8500, -64.5000],
        telefono: null, whatsapp: null, instagram: "@accesouritorco",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Mejoras en el camino de acceso al cerro Uritorco con nuevos badenes y señalización.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad244/400/200", fecha: "20 de Septiembre"
    },
    {
        id: 245, nombre: "Nueva señalización de senderos", categoria: "Novedad",
        direccion: "Todo el circuito", coordenadas: [-30.8580, -64.5240],
        telefono: null, whatsapp: null, instagram: "@senalizacion",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nueva señalización de senderos con códigos QR informativos.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad245/400/200", fecha: "25 de Septiembre"
    },
    {
        id: 246, nombre: "Campaña de concientización", categoria: "Novedad",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@concientizacion",
        facebook: "CampañaConcientizacion", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Campaña de concientización sobre el cuidado del patrimonio natural y cultural.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad246/400/200", fecha: "30 de Septiembre"
    },
    {
        id: 247, nombre: "Nuevo sendero accesible", categoria: "Novedad",
        direccion: "Cerro Uritorco - Sector Oeste", coordenadas: [-30.8470, -64.4960],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@senderoaccesible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nuevo sendero accesible para personas con movilidad reducida.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad247/400/200", fecha: "5 de Octubre"
    },
    {
        id: 248, nombre: "Taller de cocina regional", categoria: "Novedad",
        direccion: "Restaurante Camon", coordenadas: [-30.8595, -64.5236],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@cocinaregional",
        facebook: "TallerCocina", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "15:00 - 19:00",
        descripcion: "Taller de cocina regional con platos típicos de Capilla del Monte.",
        metodoPago: ["Efectivo"], foto: "https://picsum.photos/seed/novedad248/400/200", fecha: "10 de Octubre"
    },
    {
        id: 249, nombre: "Nuevo circuito turístico", categoria: "Novedad",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@circuitoturistico",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Nuevo circuito turístico que integra todos los atractivos de Capilla del Monte.",
        metodoPago: [], foto: "https://picsum.photos/seed/novedad249/400/200", fecha: "15 de Octubre"
    }*/
];

// ============================================================
//  4. NOTICIAS - 50 con estructura completa
// ============================================================
const noticias = [
    {
        id: 300, 
        nombre: "Capilla del Monte fue elegida destino turístico del año", 
        categoria: "Noticia",
        direccion: "Municipalidad de Capilla del Monte", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548481026", 
        whatsapp: null, 
        instagram: "@turismocapilla",
        facebook: "municapilladelmonte", 
        twitter: "@capillaturismo", 
        website: "turismocapilla.gob.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Capilla del Monte ha sido reconocida como el mejor destino turístico de montaña del año. Este premio destaca la calidad de sus servicios y la calidez de su gente.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia300/400/200", 
        fecha: "5 de Enero"
    },
    {
        id: 301, 
        nombre: "Inauguran nuevo centro de interpretación del cerro", 
        categoria: "Noticia",
        direccion: "Cerro Uritorco - Base", 
        coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548123456", 
        whatsapp: "+5493548123456", 
        instagram: "@cerrouritorco",
        facebook: "CentroInterpretacion", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: "09:00 - 17:00",
        descripcion: "Se inauguró el nuevo centro de interpretación del cerro Uritorco con tecnología interactiva y exhibiciones geológicas.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia301/400/200", 
        fecha: "12 de Enero"
    },
    {
        id: 302, 
        nombre: "Récord de visitantes en el mes de enero", 
        categoria: "Noticia",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548614515", 
        whatsapp: "+5493548614515", 
        instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", 
        twitter: null, 
        website: "turismocapilla.gob.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Capilla del Monte recibió un récord histórico de visitantes durante el mes de enero, superando todas las expectativas.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia302/400/200", 
        fecha: "20 de Enero"
    },
    {
        id: 303, 
        nombre: "Se anunció nuevo festival internacional", 
        categoria: "Noticia",
        direccion: "Municipalidad", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548234567", 
        whatsapp: "+5493548234567", 
        instagram: "@festivalinternacional",
        facebook: "FestivalInternacional", 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se anunció la realización de un nuevo festival internacional que posicionará a Capilla del Monte en el mundo.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia303/400/200", 
        fecha: "28 de Enero"
    },
    {
        id: 304, 
        nombre: "Capilla del Monte en la feria de turismo internacional", 
        categoria: "Noticia",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548345678", 
        whatsapp: "+5493548345678", 
        instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", 
        twitter: null, 
        website: "turismocapilla.gob.ar",
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Capilla del Monte participó en la feria de turismo internacional presentando sus atractivos a operadores de todo el mundo.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia304/400/200", 
        fecha: "5 de Febrero"
    },
    {
        id: 305, 
        nombre: "Nuevo sistema de transporte turístico", 
        categoria: "Noticia",
        direccion: "Todo el municipio", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548456789", 
        whatsapp: "+5493548456789", 
        instagram: "@transportecapilla",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se implementó un nuevo sistema de transporte turístico que conecta todos los puntos de interés de Capilla del Monte.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia305/400/200", 
        fecha: "12 de Febrero"
    },
    {
        id: 306, 
        nombre: "Reconocimiento nacional a la gestión turística", 
        categoria: "Noticia",
        direccion: "Municipalidad", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548567890", 
        whatsapp: "+5493548567890", 
        instagram: "@gestionturistica",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Capilla del Monte recibió un reconocimiento nacional por su gestión turística sustentable e innovadora.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia306/400/200", 
        fecha: "20 de Febrero"
    },
    {
        id: 307, 
        nombre: "Se amplía la oferta de alojamientos", 
        categoria: "Noticia",
        direccion: "Todo el municipio", 
        coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548678901", 
        whatsapp: "+5493548678901", 
        instagram: "@alojamientoscapilla",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se amplió la oferta de alojamientos en Capilla del Monte con nuevos hoteles, hostales y cabañas.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia307/400/200", 
        fecha: "28 de Febrero"
    },
    {
        id: 308, 
        nombre: "Nuevo programa de educación ambiental", 
        categoria: "Noticia",
        direccion: "Secretaría de Turismo", 
        coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548789012", 
        whatsapp: "+5493548789012", 
        instagram: "@educacionambiental",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Se lanzó un nuevo programa de educación ambiental para escuelas y visitantes.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia308/400/200", 
        fecha: "5 de Marzo"
    },
    {
        id: 309, 
        nombre: "Capilla del Monte en la guía de viajes más importante", 
        categoria: "Noticia",
        direccion: "Municipalidad", 
        coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", 
        whatsapp: "+5493548890123", 
        instagram: "@guiadeviajes",
        facebook: null, 
        twitter: null, 
        website: null,
        delivery: false, 
        deliveryInfo: null, 
        horario: null,
        descripcion: "Capilla del Monte fue incluida en la guía de viajes más importante del mundo, destacando sus atractivos naturales y culturales.",
        metodoPago: [], 
        foto: "https://picsum.photos/seed/noticia309/400/200", 
        fecha: "12 de Marzo"
    },
    {
        id: 310, nombre: "Se inaugura el primer museo interactivo", categoria: "Noticia",
        direccion: "Museo de la Ciudad", coordenadas: [-30.8580, -64.5260],
        telefono: "+5493548901234", whatsapp: "+5493548901234", instagram: "@museointeractivo",
        facebook: "museocapilla", twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "10:00 - 18:00",
        descripcion: "Se inauguró el primer museo interactivo de la región con tecnología de vanguardia y experiencias inmersivas.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia310/400/200", fecha: "20 de Marzo"
    },
    {
        id: 311, nombre: "Nuevo proyecto de desarrollo sustentable", categoria: "Noticia",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548012345", whatsapp: "+5493548012345", instagram: "@desarrollosustentable",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó un nuevo proyecto de desarrollo sustentable que posicionará a Capilla del Monte como referente en turismo responsable.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia311/400/200", fecha: "28 de Marzo"
    },
    {
        id: 312, nombre: "Capilla del Monte se prepara para la temporada", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548123456", whatsapp: "+5493548123456", instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", twitter: null, website: "turismocapilla.gob.ar",
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte se prepara para recibir la temporada alta con nuevos servicios y mejoras en la infraestructura.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia312/400/200", fecha: "5 de Abril"
    },
    {
        id: 313, nombre: "Inversión histórica en infraestructura turística", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@infraestructuracapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se anunció una inversión histórica en infraestructura turística que transformará Capilla del Monte.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia313/400/200", fecha: "12 de Abril"
    },
    {
        id: 314, nombre: "Nuevo récord de pernoctaciones", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", twitter: null, website: "turismocapilla.gob.ar",
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte alcanzó un nuevo récord de pernoctaciones durante el último fin de semana largo.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia314/400/200", fecha: "20 de Abril"
    },
    {
        id: 315, nombre: "Se presentó el plan maestro de turismo", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@planmaestro",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó el plan maestro de turismo 2025-2030 que guiará el desarrollo turístico de Capilla del Monte.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia315/400/200", fecha: "28 de Abril"
    },
    {
        id: 316, nombre: "Capilla del Monte se destaca en turismo de naturaleza", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@naturalezacapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte fue destacada como uno de los mejores destinos de turismo de naturaleza del país.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia316/400/200", fecha: "5 de Mayo"
    },
    {
        id: 317, nombre: "Nuevo convenio para promoción turística", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@promocionturistica",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se firmó un nuevo convenio para la promoción turística de Capilla del Monte en mercados internacionales.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia317/400/200", fecha: "12 de Mayo"
    },
    {
        id: 318, nombre: "Se lanza campaña de turismo de invierno", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548789012", whatsapp: "+5493548789012", instagram: "@inviernocapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó la campaña de turismo de invierno con promociones y actividades especiales.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia318/400/200", fecha: "20 de Mayo"
    },
    {
        id: 319, nombre: "Capilla del Monte entre los mejores destinos de montaña", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@montañacapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte fue seleccionada entre los mejores destinos de montaña de Sudamérica.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia319/400/200", fecha: "28 de Mayo"
    },
    {
        id: 320, nombre: "Nuevo programa de guías locales", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548901234", whatsapp: "+5493548901234", instagram: "@guiaslocales",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó un nuevo programa de formación de guías locales con certificación oficial.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia320/400/200", fecha: "5 de Junio"
    },
    {
        id: 321, nombre: "Se inaugura el sendero de los artistas", categoria: "Noticia",
        direccion: "Calle Techada", coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548012345", whatsapp: "+5493548012345", instagram: "@senderodeartistas",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se inauguró el sendero de los artistas, un recorrido con obras de artistas locales.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia321/400/200", fecha: "12 de Junio"
    },
    {
        id: 322, nombre: "Capilla del Monte recibe premio internacional", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548123456", whatsapp: "+5493548123456", instagram: "@premiocapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte recibió un premio internacional por su compromiso con el turismo sustentable.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia322/400/200", fecha: "20 de Junio"
    },
    {
        id: 323, nombre: "Nuevo centro de deportes de aventura", categoria: "Noticia",
        direccion: "Cerro Uritorco - Base", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@deportesaventura",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "09:00 - 18:00",
        descripcion: "Se inauguró un nuevo centro de deportes de aventura con actividades de trekking, escalada y tirolesa.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia323/400/200", fecha: "28 de Junio"
    },
    {
        id: 324, nombre: "Se duplica la oferta gastronómica", categoria: "Noticia",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@gastronomiacapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se duplicó la oferta gastronómica de Capilla del Monte con nuevos restaurantes y propuestas culinarias.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia324/400/200", fecha: "5 de Julio"
    },
    {
        id: 325, nombre: "Nuevo proyecto de alumbrado público", categoria: "Noticia",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@alumbradocapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó un nuevo proyecto de alumbrado público con tecnología LED en toda la ciudad.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia325/400/200", fecha: "12 de Julio"
    },
    /*{
        id: 326, nombre: "Capilla del Monte se une a la red de pueblos mágicos", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@pueblosmagicos",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte se incorporó a la red de pueblos mágicos, un reconocimiento a su encanto y autenticidad.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia326/400/200", fecha: "20 de Julio"
    },
    {
        id: 327, nombre: "Se crea nuevo espacio cultural", categoria: "Noticia",
        direccion: "Barrio El Cerro", coordenadas: [-30.8530, -64.5180],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@espacioculturalcapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se creó un nuevo espacio cultural con sala de exposiciones, auditorio y áreas de trabajo.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia327/400/200", fecha: "28 de Julio"
    },
    {
        id: 328, nombre: "Capilla del Monte en el top 10 de destinos", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548789012", whatsapp: "+5493548789012", instagram: "@top10capilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte se posicionó en el top 10 de los destinos turísticos más elegidos del país.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia328/400/200", fecha: "5 de Agosto"
    },
    {
        id: 329, nombre: "Nuevo plan de movilidad turística", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@movilidadcapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó un nuevo plan de movilidad turística con rutas y horarios de transporte público.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia329/400/200", fecha: "12 de Agosto"
    },
    {
        id: 330, nombre: "Se inaugura el mirador del Uritorco", categoria: "Noticia",
        direccion: "Cerro Uritorco - Cima", coordenadas: [-30.8400, -64.4900],
        telefono: "+5493548901234", whatsapp: "+5493548901234", instagram: "@miradoruritorco",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "08:00 - 18:00",
        descripcion: "Se inauguró el nuevo mirador en la cima del cerro Uritorco con vistas panorámicas inigualables.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia330/400/200", fecha: "20 de Agosto"
    },
    {
        id: 331, nombre: "Capilla del Monte apuesta al turismo familiar", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548012345", whatsapp: "+5493548012345", instagram: "@turismofamiliar",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte lanza una campaña para posicionarse como destino de turismo familiar con actividades para todas las edades.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia331/400/200", fecha: "28 de Agosto"
    },
    {
        id: 332, nombre: "Nuevo programa de turismo accesible", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548123456", whatsapp: "+5493548123456", instagram: "@turismoaccesible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó un nuevo programa de turismo accesible con infraestructura y servicios para personas con discapacidad.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia332/400/200", fecha: "5 de Septiembre"
    },
    {
        id: 333, nombre: "Se presenta nueva guía de aventura", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@guiadeaventura",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó la nueva guía de aventura con los mejores circuitos de trekking y actividades de montaña.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia333/400/200", fecha: "12 de Septiembre"
    },
    {
        id: 334, nombre: "Capilla del Monte celebra su aniversario", categoria: "Noticia",
        direccion: "Plaza Central", coordenadas: [-30.8560, -64.5250],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@aniversariocapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte celebró su aniversario con una gran fiesta popular y actividades para toda la comunidad.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia334/400/200", fecha: "20 de Septiembre"
    },
    {
        id: 335, nombre: "Nuevo proyecto de señalética turística", categoria: "Noticia",
        direccion: "Todo el circuito", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@senaleticaturistica",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó un nuevo proyecto de señalética turística con tecnología QR y realidad aumentada.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia335/400/200", fecha: "28 de Septiembre"
    },
    {
        id: 336, nombre: "Se lanza app oficial de Capilla del Monte", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@appcapillaoficial",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó la aplicación oficial de Capilla del Monte con información turística, mapas y eventos.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia336/400/200", fecha: "5 de Octubre"
    },
    {
        id: 337, nombre: "Capilla del Monte en la televisión nacional", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@tvcapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte fue protagonista de un programa especial en la televisión nacional que mostró sus atractivos.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia337/400/200", fecha: "12 de Octubre"
    },
    {
        id: 338, nombre: "Nuevo circuito de bodegas regionales", categoria: "Noticia",
        direccion: "Ruta 38", coordenadas: [-30.8700, -64.5300],
        telefono: "+5493548789012", whatsapp: "+5493548789012", instagram: "@bodegascapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se inauguró un nuevo circuito de bodegas regionales con degustaciones y visitas guiadas.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia338/400/200", fecha: "20 de Octubre"
    },
    {
        id: 339, nombre: "Se inaugura el parque de la familia", categoria: "Noticia",
        direccion: "Barrio San Antonio", coordenadas: [-30.8550, -64.5200],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@parquedelafamilia",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "08:00 - 20:00",
        descripcion: "Se inauguró el parque de la familia con juegos infantiles, áreas deportivas y espacios de descanso.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia339/400/200", fecha: "28 de Octubre"
    },
    {
        id: 340, nombre: "Capilla del Monte se prepara para la temporada de verano", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548901234", whatsapp: "+5493548901234", instagram: "@veranocapilla",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte se prepara para recibir la temporada de verano con nuevos servicios y actividades.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia340/400/200", fecha: "5 de Noviembre"
    },
    {
        id: 341, nombre: "Nuevo programa de conservación del cerro", categoria: "Noticia",
        direccion: "Cerro Uritorco", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548012345", whatsapp: "+5493548012345", instagram: "@conservacionuritorco",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó un nuevo programa de conservación del cerro Uritorco con monitoreo y restauración.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia341/400/200", fecha: "12 de Noviembre"
    },
    {
        id: 342, nombre: "Se crea la ruta de los artesanos", categoria: "Noticia",
        direccion: "Calle Techada", coordenadas: [-30.8596, -64.5238],
        telefono: "+5493548123456", whatsapp: "+5493548123456", instagram: "@rutadeartesanos",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se creó la ruta de los artesanos, un recorrido que conecta los talleres de artistas locales.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia342/400/200", fecha: "20 de Noviembre"
    },
    {
        id: 343, nombre: "Capilla del Monte recibe a más de 100 mil turistas", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548234567", whatsapp: "+5493548234567", instagram: "@turismocapilla",
        facebook: "seceretariaturismocapilladelmonte", twitter: null, website: "turismocapilla.gob.ar",
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte superó la barrera de los 100 mil turistas en lo que va del año, un récord histórico.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia343/400/200", fecha: "28 de Noviembre"
    },
    {
        id: 344, nombre: "Nuevo convenio de cooperación internacional", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548345678", whatsapp: "+5493548345678", instagram: "@cooperacioninternacional",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se firmó un nuevo convenio de cooperación internacional para el intercambio turístico y cultural.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia344/400/200", fecha: "5 de Diciembre"
    },
    {
        id: 345, nombre: "Se lanza el sello de calidad turística", categoria: "Noticia",
        direccion: "Secretaría de Turismo", coordenadas: [-30.8606, -64.5229],
        telefono: "+5493548456789", whatsapp: "+5493548456789", instagram: "@sellocalidad",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se lanzó el sello de calidad turística que certifica los servicios de excelencia en Capilla del Monte.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia345/400/200", fecha: "12 de Diciembre"
    },
    {
        id: 346, nombre: "Capilla del Monte se destaca en redes sociales", categoria: "Noticia",
        direccion: "Todo el municipio", coordenadas: [-30.8580, -64.5240],
        telefono: "+5493548567890", whatsapp: "+5493548567890", instagram: "@capillasocial",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte se destaca en redes sociales con contenido viral que promociona sus atractivos.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia346/400/200", fecha: "20 de Diciembre"
    },
    {
        id: 347, nombre: "Nuevo proyecto de turismo científico", categoria: "Noticia",
        direccion: "Cerro Uritorco", coordenadas: [-30.8460, -64.4950],
        telefono: "+5493548678901", whatsapp: "+5493548678901", instagram: "@turismocientifico",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Se presentó un nuevo proyecto de turismo científico con actividades de investigación y observación.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia347/400/200", fecha: "28 de Diciembre"
    },
    {
        id: 348, nombre: "Se inaugura el centro de convenciones", categoria: "Noticia",
        direccion: "Salón Municipal", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548789012", whatsapp: "+5493548789012", instagram: "@centrodeconvenciones",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: "08:00 - 22:00",
        descripcion: "Se inauguró el nuevo centro de convenciones con capacidad para 500 personas y equipamiento de última generación.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia348/400/200", fecha: "5 de Enero"
    },
    {
        id: 349, nombre: "Capilla del Monte apuesta al turismo sostenible", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@turismosostenible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte apuesta al turismo sostenible con nuevas políticas de cuidado ambiental y desarrollo local.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia349/400/200", fecha: "12 de Enero"
    },
    {
        id: 350, nombre: "Capilla del Monte apuesta al turismo sostenible", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@turismosostenible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte apuesta al turismo sostenible con nuevas políticas de cuidado ambiental y desarrollo local.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia349/400/200", fecha: "12 de Enero"
    },
    {
        id: 351, nombre: "Capilla del Monte apuesta al turismo sostenible", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@turismosostenible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte apuesta al turismo sostenible con nuevas políticas de cuidado ambiental y desarrollo local.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia349/400/200", fecha: "12 de Enero"
    },
    {
        id: 357, nombre: "Capilla del Monte apuesta al turismo sostenible", categoria: "Noticia",
        direccion: "Municipalidad", coordenadas: [-30.8563, -64.5256],
        telefono: "+5493548890123", whatsapp: "+5493548890123", instagram: "@turismosostenible",
        facebook: null, twitter: null, website: null,
        delivery: false, deliveryInfo: null, horario: null,
        descripcion: "Capilla del Monte apuesta al turismo sostenible con nuevas políticas de cuidado ambiental y desarrollo local.",
        metodoPago: [], foto: "https://picsum.photos/seed/noticia349/400/200", fecha: "12 de Enero"
    }*/
];

// ============================================================
//  5. ICONOS Y COLORES
// ============================================================
function getIconoPorCategoria(categoria) {
    const iconos = {
        'Turismo Aventura': 'fa-mountain-sun',
        'Cultura': 'fa-landmark',
        'Camping': 'fa-campground',
        'Oficina de Turismo': 'fa-map-location-dot',
        'Bar': 'fa-martini-glass',
        'Entretenimiento': 'fa-gamepad',
        'Alojamiento': 'fa-hotel',
        'Restaurante': 'fa-utensils',
        'Pizzería': 'fa-pizza-slice',
        'Pastelería': 'fa-cake-candles',
        'Heladería': 'fa-ice-cream',
        'Café': 'fa-mug-saucer',
        'Panadería': 'fa-bread-slice',
        'Despensa': 'fa-basket-shopping',
        'Farmacia': 'fa-pills',
        'Hospital': 'fa-hospital',
        'Comisaría': 'fa-shield-halved',
        'Municipalidad': 'fa-city',
        'Ferretería': 'fa-hammer',
        'Estación de Servicio': 'fa-gas-pump',
        'Carga de Garrafa': 'fa-fire-flame-curved',
        'Kiosco': 'fa-shop',
        'Evento': 'fa-calendar-day',
        'Novedad': 'fa-newspaper',
        'Noticia': 'fa-bullhorn',
        //nuevos ver y cambiar 
        'Cine': 'fa-film',
        'Iglesia': 'fa-church',
        'Parroquia': 'fa-church',
        'Ferias': 'fa-gift',
        'Senderismo': 'fa-hiking',
        'Balnearios': 'fa-umbrella-beach',
        'Club de Pesca': 'fa-fish',
        'Dique': 'fa-water',
        'Cerro': 'fa-mountain',
        'Atracción Turística': 'fa-star',
        'Centro de Informes Ovni': 'fa-user-astronaut',
        'Biblioteca': 'fa-book',
        'Gruta Religiosa': 'fa-cross',
        'Reserva Natural': 'fa-tree'
    };
    return iconos[categoria] || 'fa-store';
}

function getColorPorCategoria(categoria) {
    const colores = {
        'Turismo Aventura': '#2ECC71', 
        'Cultura': '#8E44AD', 
        'Camping': '#27AE60',
        'Oficina de Turismo': '#00A8A8', 
        'Bar': '#9B59B6', 
        'Entretenimiento': '#1ABC9C',
        'Alojamiento': '#2C3E50', 
        'Restaurante': '#E67E22', 
        'Pizzería': '#E67E22',
        'Pastelería': '#F5A0C0', 
        'Heladería': '#3498DB', 
        'Café': '#6F4E37',
        'Panadería': '#D4A843', 
        'Despensa': '#D4A843', 
        'Farmacia': '#E74C3C',
        'Hospital': '#E74C3C', 
        'Comisaría': '#2C3E50', 
        'Municipalidad': '#2C3E50',
        'Ferretería': '#7F8C8D', 
        'Estación de Servicio': '#E74C3C',
        'Carga de Garrafa': '#FF8C00', 
        'Kiosco': '#9B59B6',
        'Evento': '#D4A843', 
        'Novedad': '#2E7D32', 
        'Noticia': '#E74C3C',
        // NUEVAS CATEGORÍAS
        'Cine': '#E91E63',
        'Iglesia': '#9C27B0',
        'Parroquia': '#9C27B0',
        'Ferias': '#FF9800',
        'Senderismo': '#4CAF50',
        'Balnearios': '#00BCD4',
        'Club de Pesca': '#2196F3',
        'Dique': '#3F51B5',
        'Cerro': '#795548',
        'Atracción Turística': '#F1C40F',
        'Centro de Informes Ovni': '#9B59B6',
        'Biblioteca': '#0c1155',
        'Gruta Religiosa': '#8D6E63',
        'Reserva Natural': '#4CAF50'
    };
    return colores[categoria] || '#2E7D32';
}

function crearIconoLugar(lugar) {
    const icono = getIconoPorCategoria(lugar.categoria);
    const color = getColorPorCategoria(lugar.categoria);
    return L.divIcon({
        className: 'marcador-negocio',
        html: `<i class="fas ${icono}" style="font-size:16px;color:white;background:${color};border-radius:50%;padding:8px;box-shadow:0 2px 12px rgba(0,0,0,0.3);border:2px solid white;width:36px;height:36px;display:flex;align-items:center;justify-content:center;"></i>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
}

// ============================================================
//  6. MAPA
// ============================================================
const map = L.map('map', {
    center: [-30.8580, -64.5240],
    zoom: 15,
    zoomControl: false
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

setTimeout(() => {
    const attribution = document.querySelector('.leaflet-control-attribution');
    if (attribution) {
        attribution.style.display = 'block';
        attribution.style.opacity = '1';
        attribution.style.visibility = 'visible';
        attribution.style.position = 'relative';
        attribution.style.zIndex = '500';
    }
}, 100);

// ============================================================
//  7. MARCADOR DE USUARIO
// ============================================================
let userMarker = null;
let userCircle = null;
let userLocation = null;

const userIcon = L.divIcon({
    className: 'marcador-usuario',
    iconSize: [18, 18],
    iconAnchor: [9, 9]
});

// ============================================================
//  8. AGREGAR LUGARES AL MAPA
// ============================================================
const markers = [];

function agregarLugares() {
    lugares.forEach(lugar => {
        const icon = crearIconoLugar(lugar);
        const marker = L.marker(lugar.coordenadas, {
            icon: icon
        }).addTo(map);
        
        marker.on('click', () => {
            mostrarInfoLugar(lugar);
        });
        
        markers.push({
            marker: marker,
            datos: lugar
        });
    });
}

agregarLugares();

// ============================================================
//  9. GEOLOCALIZACIÓN
// ============================================================
function iniciarGeolocalizacion() {
    if (!navigator.geolocation) {
        alert('❌ Tu navegador no soporta GPS. Usá Chrome o Firefox.');
        return;
    }
    
    const options = {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 5000
    };
    
    navigator.geolocation.getCurrentPosition(
        (pos) => {
            console.log('✅ Ubicación obtenida:', pos.coords.latitude, pos.coords.longitude);
            actualizarUbicacion(pos);
            iniciarSeguimiento();
        },
        (err) => {
            console.error('❌ Error GPS:', err);
            let mensaje = '❌ No se pudo obtener tu ubicación.\n\n';
            switch(err.code) {
                case 1:
                    mensaje += '📱 Permiso denegado. Activá la ubicación en Chrome:\n';
                    mensaje += 'Configuración → Privacidad → Ubicación → Permitir';
                    break;
                case 2:
                    mensaje += '📡 Señal GPS no disponible. Activá el GPS y salí al exterior.';
                    break;
                case 3:
                    mensaje += '⏱️ Tiempo de espera agotado. Intentá de nuevo.';
                    break;
                default:
                    mensaje += '⚠️ Error desconocido. Reiniciá el navegador.';
            }
            alert(mensaje);
            map.setView([-30.8580, -64.5240], 14);
        },
        options
    );
}

let watchId = null;

function iniciarSeguimiento() {
    if (watchId) return;
    
    watchId = navigator.geolocation.watchPosition(
        (pos) => {
            actualizarUbicacion(pos);
        },
        (err) => {
            console.warn('⚠️ Error en seguimiento:', err);
        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 5000
        }
    );
}

function actualizarUbicacion(pos) {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    userLocation = [lat, lng];
    
    if (userMarker) {
        userMarker.setLatLng([lat, lng]);
    } else {
        userMarker = L.marker([lat, lng], {
            icon: userIcon,
            zIndexOffset: 1000
        }).addTo(map);
    }
    
    if (userCircle) {
        userCircle.setLatLng([lat, lng]);
    } else {
        userCircle = L.circle([lat, lng], {
            radius: 30,
            color: '#4A90D9',
            fillColor: '#4A90D9',
            fillOpacity: 0.1,
            weight: 2,
            opacity: 0.4
        }).addTo(map);
    }
    
    if (!map._userCentered) {
        map.setView([lat, lng], 16);
        map._userCentered = true;
    }
}

// ============================================================
//  10. MOSTRAR INFO DEL LUGAR
// ============================================================
function mostrarInfoLugar(lugar) {
    const footer = document.querySelector('footer');
    if (footer) footer.classList.add('oculto');
    
    ocultarMenu(true);
    
    const panel = document.getElementById('info-panel');
    
    document.getElementById('infoNombre').textContent = lugar.nombre;
    document.getElementById('infoCategoria').textContent = lugar.categoria;
    document.getElementById('infoDireccion').textContent = lugar.direccion || 'Dirección no disponible';
    document.getElementById('infoHorario').textContent = lugar.horario || 'Horario no disponible';
    document.getElementById('infoDescripcion').innerHTML = lugar.descripcion || 'Sin descripción';
    
     // AGREGAR ÍCONOS
    const contenedorIconos = document.getElementById('infoIconos');
    if (lugar.iconos && lugar.iconos.length > 0) {
        contenedorIconos.style.display = 'flex';
        contenedorIconos.innerHTML = lugar.iconos.map(icon => `
            <span class="etiqueta-icono" style="background:${icon.color}20; border: 1px solid ${icon.color}; color: ${icon.color};">
                <i class="fas ${icon.icono}"></i> ${icon.nombre}
            </span>
        `).join('');
    } else {
        contenedorIconos.style.display = 'none';
    }


    const deliveryDiv = document.getElementById('infoDelivery');
    if (lugar.delivery) {
        deliveryDiv.style.display = 'flex';
        document.getElementById('infoDeliveryTexto').textContent = `✅ Delivery disponible ${lugar.deliveryInfo || ''}`;
    } else {
        deliveryDiv.style.display = 'none';
    }
    
    const whatsapp = document.getElementById('infoWhatsapp');
    if (lugar.whatsapp) {
        whatsapp.style.display = 'flex';
        whatsapp.href = `https://wa.me/${lugar.whatsapp.replace(/[^0-9]/g, '')}`;
    } else {
        whatsapp.style.display = 'none';
    }

    const telefono = document.getElementById('infoTelefono');
    if (lugar.telefono) {
    telefono.style.display = 'flex';
    telefono.href = `tel:${lugar.telefono.replace(/[^0-9+]/g, '')}`;
    } else {
    telefono.style.display = 'none';
}
    
    const instagram = document.getElementById('infoInstagram');
    if (lugar.instagram) {
        instagram.style.display = 'flex';
        instagram.href = `https://instagram.com/${lugar.instagram.replace('@', '')}`;
    } else {
        instagram.style.display = 'none';
    }
    
    const facebook = document.getElementById('infoFacebook');
    if (lugar.facebook) {
        facebook.style.display = 'flex';
        facebook.href = `https://facebook.com/${lugar.facebook}`;
    } else {
        facebook.style.display = 'none';
    }
    
    const twitter = document.getElementById('infoTwitter');
    if (lugar.twitter) {
        twitter.style.display = 'flex';
        twitter.href = `https://twitter.com/${lugar.twitter.replace('@', '')}`;
    } else {
        twitter.style.display = 'none';
    }
    
    const web = document.getElementById('infoWeb');
    if (lugar.website) {
        web.style.display = 'flex';
        web.href = `https://${lugar.website}`;
    } else {
        web.style.display = 'none';
    }
    
    const btnLlegar = document.getElementById('btnComoLlegar');
    btnLlegar.onclick = () => {
        if (userLocation) {
            const destino = `${lugar.coordenadas[0]},${lugar.coordenadas[1]}`;
            const origen = `${userLocation[0]},${userLocation[1]}`;
            const url = `https://www.google.com/maps/dir/${origen}/${destino}`;
            window.open(url, '_blank');
        } else {
            alert('Primero activá tu ubicación para poder llegar');
        }
    };
    
    panel.style.display = 'block';
    setTimeout(() => {
        panel.classList.add('active');
    }, 50);
}

// ============================================================
//  11. CERRAR PANEL
// ============================================================
document.getElementById('btnCerrarInfo').addEventListener('click', () => {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('active');
    setTimeout(() => {
        panel.style.display = 'none';
        const footer = document.querySelector('footer');
        if (footer) footer.classList.remove('oculto');
        ocultarMenu(false);
    }, 400);
});

// ============================================================
//  12. BOTÓN IR A MI UBICACIÓN
// ============================================================
document.getElementById('btnMiUbicacion').addEventListener('click', () => {
    if (userLocation) {
        map.setView(userLocation, 16);
    } else {
        alert('Esperando tu ubicación...');
    }
});

// ============================================================
//  13. LUGARES CERCANOS
// ============================================================
document.getElementById('btnCercanos').addEventListener('click', () => {
    if (!userLocation) {
        alert('Esperando tu ubicación...');
        return;
    }
    
    const footer = document.querySelector('footer');
    if (footer) footer.classList.add('oculto');
    
    const cercanos = calcularCercanos(userLocation, 50);
    mostrarListaCercanos(cercanos);
});

function calcularCercanos(ubicacion, cantidad) {
    const [lat, lon] = ubicacion;
    const conDistancia = lugares.map(lug => {
        const dist = calcularDistancia(lat, lon, lug.coordenadas[0], lug.coordenadas[1]);
        return { ...lug, distancia: dist };
    });
    conDistancia.sort((a, b) => a.distancia - b.distancia);
    return conDistancia.slice(0, cantidad);
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

function mostrarListaCercanos(cercanos) {
    const modal = document.getElementById('modalCercanos');
    
    const listaQuehacer = document.getElementById('lista-quehacer');
    const listaDormir = document.getElementById('lista-dormir');
    const listaComer = document.getElementById('lista-comer');
    listaQuehacer.innerHTML = '';
    listaDormir.innerHTML = '';
    listaComer.innerHTML = '';
    
    const categoriasQuehacer = ['Turismo Aventura', 'Cultura', 'Camping', 'Oficina de Turismo', 'Bar', 'Entretenimiento'];
    const categoriasDormir = ['Alojamiento'];
    const categoriasComer = ['Restaurante', 'Pizzería', 'Pastelería', 'Heladería', 'Café', 'Panadería', 'Despensa'];
    
    cercanos.forEach(lug => {
        const div = document.createElement('div');
        div.className = 'item-lugar';
        div.innerHTML = `
            <span class="nombre">${lug.nombre}</span>
            <span class="distancia">${lug.distancia.toFixed(2)} km</span>
        `;
        div.onclick = () => {
            mostrarInfoLugar(lug);
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 400);
        };
        
        if (categoriasQuehacer.includes(lug.categoria)) {
            listaQuehacer.appendChild(div.cloneNode(true));
        } else if (categoriasDormir.includes(lug.categoria)) {
            listaDormir.appendChild(div.cloneNode(true));
        } else if (categoriasComer.includes(lug.categoria)) {
            listaComer.appendChild(div.cloneNode(true));
        }
    });
    
    if (listaQuehacer.children.length === 0) {
        listaQuehacer.innerHTML = '<p style="color:#8B6B4A;font-size:13px;padding:8px;">No hay lugares de esta categoría cerca</p>';
    }
    if (listaDormir.children.length === 0) {
        listaDormir.innerHTML = '<p style="color:#8B6B4A;font-size:13px;padding:8px;">No hay alojamientos cerca</p>';
    }
    if (listaComer.children.length === 0) {
        listaComer.innerHTML = '<p style="color:#8B6B4A;font-size:13px;padding:8px;">No hay lugares para comer cerca</p>';
    }
    
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 50);
}

// ============================================================
//  14. Toggle categorías en modal
// ============================================================
document.querySelectorAll('.categoria-toggle').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = this.dataset.target;
        const sub = document.getElementById(target);
        if (sub) {
            if (sub.style.display === 'none') {
                sub.style.display = 'block';
                this.classList.add('active');
            } else {
                sub.style.display = 'none';
                this.classList.remove('active');
            }
        }
    });
});

document.getElementById('btnCerrarModal').addEventListener('click', () => {
    const modal = document.getElementById('modalCercanos');
    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
        const footer = document.querySelector('footer');
        if (footer) footer.classList.remove('oculto');
    }, 400);
});

document.getElementById('modalCercanos').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        const modal = document.getElementById('modalCercanos');
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            const footer = document.querySelector('footer');
            if (footer) footer.classList.remove('oculto');
        }, 400);
    }
});

// ============================================================
//  15. EMERGENCIA
// ============================================================
document.getElementById('btnEmergencia').addEventListener('click', () => {
    const menu = document.getElementById('emergencia-menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        clearTimeout(window.emergenciaTimeout);
        window.emergenciaTimeout = setTimeout(() => {
            menu.style.display = 'none';
        }, 10000);
    } else {
        menu.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    const container = document.getElementById('botones-flotantes');
    if (container && !container.contains(e.target)) {
        const menu = document.getElementById('emergencia-menu');
        if (menu) menu.style.display = 'none';
    }
});

function llamarEmergencia(tipo) {
    const numeros = { 'policia': '101', 'bomberos': '100', 'ambulancia': '107' };
    const nombres = { 'policia': 'Policía', 'bomberos': 'Bomberos', 'ambulancia': 'Ambulancia' };
    
    if (confirm(`📞 ¿Querés llamar a ${nombres[tipo]} (${numeros[tipo]})?`)) {
        window.location.href = `tel:${numeros[tipo]}`;
    }
    document.getElementById('emergencia-menu').style.display = 'none';
}

function reportarEmergencia(tipo) {
    const mensajes = { 'incendio': '🔥 Reporte de incendio', 'robo': '🚨 Reporte de robo' };
    const texto = mensajes[tipo] || '🚨 Reporte de emergencia';
    const mensaje = prompt('📝 Describí la situación (opcional):');
    const ubicacion = userLocation ? `\n📍 Ubicación: ${userLocation[0]}, ${userLocation[1]}` : '';
    const textoCompleto = `${texto}${ubicacion}${mensaje ? '\n📝 ' + mensaje : ''}`;
    const telefono = '5493511234567';
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(textoCompleto)}`, '_blank');
    document.getElementById('emergencia-menu').style.display = 'none';
}

function enviarUbicacionEmergencia() {
    if (!userLocation) {
        alert('❌ No se pudo obtener tu ubicación. Activá el GPS.');
        return;
    }
    const mensaje = `🚨 EMERGENCIA - Necesito ayuda\n📍 Mi ubicación: ${userLocation[0]}, ${userLocation[1]}\nhttps://www.google.com/maps?q=${userLocation[0]},${userLocation[1]}`;
    const telefono = '5493511234567';
    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, '_blank');
    document.getElementById('emergencia-menu').style.display = 'none';
}

// ============================================================
//  16. WHATSAPP - CERRAR BURBUJA
// ============================================================
document.getElementById('btnCerrarWhatsapp').addEventListener('click', () => {
    document.getElementById('whatsapp-bubble').style.display = 'none';
});

// ============================================================
//  17. NOTIFICACIONES - SISTEMA COMPLETO CON BADGES
// ============================================================

let notificacionesEstado = {
    eventos: 0,
    novedades: 0,
    noticias: 0
};

let notificacionesConfig = {
    eventos: true,
    novedades: true,
    noticias: true
};

let leidos = {
    eventos: new Set(),
    novedades: new Set(),
    noticias: new Set()
};

// ============================================================
// FUNCIONES PARA CONTAR Y ACTUALIZAR NOTIFICACIONES
// ============================================================

function contarNoLeidos(seccion, items) {
    if (!notificacionesConfig[seccion]) return 0;
    let noLeidos = 0;
    items.forEach(item => {
        if (!leidos[seccion].has(item.id)) {
            noLeidos++;
        }
    });
    return noLeidos;
}

function recalcularTodasLasNotificaciones() {
    console.log('🔔 Recalculando notificaciones...');
    
    const eventosNoLeidos = contarNoLeidos('eventos', eventos);
    const novedadesNoLeidos = contarNoLeidos('novedades', novedades);
    const noticiasNoLeidos = contarNoLeidos('noticias', noticias);

    notificacionesEstado.eventos = eventosNoLeidos;
    notificacionesEstado.novedades = novedadesNoLeidos;
    notificacionesEstado.noticias = noticiasNoLeidos;

    console.log('📊 Notificaciones:', notificacionesEstado);

    actualizarBadges();
}

function actualizarBadges() {
    console.log('🔄 Actualizando badges...');

    // ===== BADGES EN MENÚ INFERIOR =====
    const menuBadges = [
        { id: 'menuBadgeEventos', contador: notificacionesEstado.eventos || 0 },
        { id: 'menuBadgeNovedades', contador: notificacionesEstado.novedades || 0 },
        { id: 'menuBadgeNoticias', contador: notificacionesEstado.noticias || 0 }
    ];

    let totalNotificaciones = 0;

    menuBadges.forEach(({ id, contador }) => {
        const badge = document.getElementById(id);
        if (!badge) {
            console.warn(`⚠️ Badge ${id} no encontrado`);
            return;
        }

        if (contador > 0) {
            badge.textContent = contador > 99 ? '99+' : contador;
            badge.style.display = 'flex';
            badge.style.visibility = 'visible';
            badge.style.opacity = '1';
            badge.style.position = 'absolute';
            badge.style.top = '-7px';
            badge.style.right = '-7px';
            badge.style.minWidth = '22px';
            badge.style.height = '22px';
            badge.style.borderRadius = '50%';
            badge.style.background = '#FF3B30';
            badge.style.color = 'white';
            badge.style.fontSize = '11px';
            badge.style.fontWeight = '700';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.padding = '0 6px';
            badge.style.zIndex = '99999';
            badge.style.pointerEvents = 'none';
            badge.style.border = '2.5px solid white';
            badge.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
            badge.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
            badge.style.lineHeight = '1';
            badge.style.letterSpacing = '0.3px';
            badge.style.transition = 'none';
            badge.style.transform = 'none';
            badge.style.animation = 'none';
            badge.classList.add('visible');
            
            if (contador > 99) {
                badge.style.minWidth = '24px';
                badge.style.fontSize = '10px';
                badge.style.padding = '0 5px';
                badge.classList.add('max');
            }
            
            totalNotificaciones += contador;
            console.log(`✅ Badge ${id} visible con ${contador}`);
        } else {
            badge.textContent = '0';
            badge.style.display = 'none';
            badge.style.visibility = 'hidden';
            badge.style.opacity = '0';
            badge.classList.remove('visible');
            badge.classList.remove('max');
            console.log(`❌ Badge ${id} oculto (0)`);
        }
    });

    // ===== BADGES EN TÍTULOS DE SECCIONES =====
    const seccionBadges = [
        { id: 'badgeEventos', contador: notificacionesEstado.eventos || 0 },
        { id: 'badgeNovedades', contador: notificacionesEstado.novedades || 0 },
        { id: 'badgeNoticias', contador: notificacionesEstado.noticias || 0 }
    ];

    seccionBadges.forEach(({ id, contador }) => {
        const badge = document.getElementById(id);
        if (badge) {
            if (contador > 0) {
                badge.textContent = contador > 99 ? '99+' : contador;
                badge.style.display = 'inline-flex';
                badge.style.visibility = 'visible';
                badge.style.opacity = '1';
                badge.style.background = '#FF3B30';
                badge.style.color = 'white';
                badge.style.fontSize = '10px';
                badge.style.fontWeight = '700';
                badge.style.minWidth = '18px';
                badge.style.height = '18px';
                badge.style.borderRadius = '50%';
                badge.style.padding = '0 5px';
                badge.style.border = '2px solid white';
                badge.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
                badge.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
                badge.style.lineHeight = '1';
                badge.style.letterSpacing = '0.3px';
                badge.style.transition = 'none';
                badge.style.transform = 'none';
                badge.style.animation = 'none';
                badge.classList.add('visible');
                
                if (contador > 99) {
                    badge.style.minWidth = '24px';
                    badge.style.fontSize = '9px';
                    badge.style.padding = '0 7px';
                    badge.classList.add('max');
                }
            } else {
                badge.textContent = '0';
                badge.style.display = 'none';
                badge.style.visibility = 'hidden';
                badge.style.opacity = '0';
                badge.classList.remove('visible');
                badge.classList.remove('max');
            }
        }
    });

    // ===== BADGE PRINCIPAL (campana) =====
    const badgePrincipal = document.getElementById('notificacionesBadge');
    if (badgePrincipal) {
        console.log(`🔔 Actualizando campana con total: ${totalNotificaciones}`);
        
        if (totalNotificaciones > 0) {
            badgePrincipal.textContent = totalNotificaciones > 99 ? '99+' : totalNotificaciones;
            badgePrincipal.style.display = 'flex';
            badgePrincipal.style.visibility = 'visible';
            badgePrincipal.style.opacity = '1';
            badgePrincipal.style.background = '#FF3B30';
            badgePrincipal.style.color = 'white';
            badgePrincipal.style.fontSize = '10px';
            badgePrincipal.style.fontWeight = '700';
            badgePrincipal.style.minWidth = '18px';
            badgePrincipal.style.height = '18px';
            badgePrincipal.style.borderRadius = '50%';
            badgePrincipal.style.padding = '0 4px';
            badgePrincipal.style.border = '2.5px solid white';
            badgePrincipal.style.boxShadow = '0 2px 8px rgba(0,0,0,0.25)';
            badgePrincipal.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
            badgePrincipal.style.lineHeight = '1';
            badgePrincipal.style.letterSpacing = '0.3px';
            badgePrincipal.style.transition = 'none';
            badgePrincipal.style.transform = 'none';
            badgePrincipal.style.animation = 'none';
            badgePrincipal.classList.add('visible');
            console.log(`🔔 Campana actualizada: ${totalNotificaciones} notificaciones`);
        } else {
            badgePrincipal.textContent = '0';
            badgePrincipal.style.display = 'none';
            badgePrincipal.style.visibility = 'hidden';
            badgePrincipal.style.opacity = '0';
            badgePrincipal.classList.remove('visible');
            console.log('🔔 Campana oculta (0 notificaciones)');
        }
    } else {
        console.warn('⚠️ Badge principal (campana) no encontrado');
    }
}

function marcarComoLeido(seccion, id) {
    leidos[seccion].add(id);
}

function guardarLeidos() {
    try {
        const data = {
            eventos: Array.from(leidos.eventos),
            novedades: Array.from(leidos.novedades),
            noticias: Array.from(leidos.noticias)
        };
        localStorage.setItem('capilla_leidos_v2', JSON.stringify(data));
        console.log('💾 Leídos guardados:', {
            eventos: data.eventos.length,
            novedades: data.novedades.length,
            noticias: data.noticias.length
        });
        return true;
    } catch (e) {
        console.error('❌ Error guardando leídos:', e);
        return false;
    }
}

function cargarLeidos() {
    try {
        const data = JSON.parse(localStorage.getItem('capilla_leidos_v2') || '{}');
        
        if (data && typeof data === 'object') {
            if (data.eventos && Array.isArray(data.eventos)) {
                data.eventos.forEach(id => leidos.eventos.add(id));
                console.log(`📌 Eventos leídos cargados: ${data.eventos.length}`);
            }
            
            if (data.novedades && Array.isArray(data.novedades)) {
                data.novedades.forEach(id => leidos.novedades.add(id));
                console.log(`📌 Novedades leídas cargadas: ${data.novedades.length}`);
            }
            
            if (data.noticias && Array.isArray(data.noticias)) {
                data.noticias.forEach(id => leidos.noticias.add(id));
                console.log(`📌 Noticias leídas cargadas: ${data.noticias.length}`);
            }
        }
        
        console.log('✅ Leídos cargados correctamente:', {
            eventos: leidos.eventos.size,
            novedades: leidos.novedades.size,
            noticias: leidos.noticias.size
        });
        
        return true;
    } catch (e) {
        console.error('❌ Error cargando leídos:', e);
        return false;
    }
}

function cargarConfigNotificaciones() {
    const guardado = localStorage.getItem('capilla_notificaciones_config_v2');
    if (guardado) {
        try {
            const config = JSON.parse(guardado);
            notificacionesConfig = { ...notificacionesConfig, ...config };
        } catch (e) {
            console.warn('⚠️ Error cargando configuración:', e);
        }
    }

    const toggleEventos = document.getElementById('toggleEventos');
    const toggleNovedades = document.getElementById('toggleNovedades');
    const toggleNoticias = document.getElementById('toggleNoticias');

    if (toggleEventos) toggleEventos.checked = notificacionesConfig.eventos;
    if (toggleNovedades) toggleNovedades.checked = notificacionesConfig.novedades;
    if (toggleNoticias) toggleNoticias.checked = notificacionesConfig.noticias;
}

function guardarConfigNotificaciones() {
    const toggleEventos = document.getElementById('toggleEventos');
    const toggleNovedades = document.getElementById('toggleNovedades');
    const toggleNoticias = document.getElementById('toggleNoticias');

    if (toggleEventos) notificacionesConfig.eventos = toggleEventos.checked;
    if (toggleNovedades) notificacionesConfig.novedades = toggleNovedades.checked;
    if (toggleNoticias) notificacionesConfig.noticias = toggleNoticias.checked;

    localStorage.setItem('capilla_notificaciones_config_v2', JSON.stringify(notificacionesConfig));

    recalcularTodasLasNotificaciones();

    const popup = document.getElementById('notificacionesPopup');
    if (popup) {
        popup.classList.remove('active');
        popup.style.display = 'none';
    }
    alert('✅ Preferencias guardadas correctamente');
}

// ============================================================
// EVENTOS DE NOTIFICACIONES
// ============================================================

document.getElementById('btnNotificaciones').addEventListener('click', () => {
    const popup = document.getElementById('notificacionesPopup');
    popup.style.display = 'flex';
    popup.classList.add('active');
    cargarConfigNotificaciones();
});

document.getElementById('btnCerrarNotificaciones').addEventListener('click', () => {
    document.getElementById('notificacionesPopup').classList.remove('active');
    document.getElementById('notificacionesPopup').style.display = 'none';
});

document.getElementById('notificacionesPopup').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.getElementById('notificacionesPopup').classList.remove('active');
        document.getElementById('notificacionesPopup').style.display = 'none';
    }
});

document.getElementById('btnGuardarNotificaciones').addEventListener('click', guardarConfigNotificaciones);

// ============================================================
// RENDERIZAR SECCIONES CON RESETEO DE BADGES AL ENTRAR
// ============================================================

function renderizarEventos() {
    const contenedor = document.getElementById('listaEventos');
    contenedor.innerHTML = '';

    // PRIMERO: Marcar todos como leídos
    eventos.forEach(evento => marcarComoLeido('eventos', evento.id));
    guardarLeidos();
    
    // SEGUNDO: Actualizar el estado a 0
    notificacionesEstado.eventos = 0;
    
    // TERCERO: FORZAR actualización de badges - Método directo
    const badgeEventos = document.getElementById('menuBadgeEventos');
    if (badgeEventos) {
        badgeEventos.style.display = 'none';
        badgeEventos.style.visibility = 'hidden';
        badgeEventos.style.opacity = '0';
        badgeEventos.textContent = '0';
        badgeEventos.classList.remove('visible');
        badgeEventos.classList.remove('max');
    }
    
    const badgeTitulo = document.getElementById('badgeEventos');
    if (badgeTitulo) {
        badgeTitulo.style.display = 'none';
        badgeTitulo.style.visibility = 'hidden';
        badgeTitulo.style.opacity = '0';
        badgeTitulo.textContent = '0';
        badgeTitulo.classList.remove('visible');
        badgeTitulo.classList.remove('max');
    }
    
    // CUARTO: ACTUALIZAR LA CAMPANA CORRECTAMENTE
    const total = (notificacionesEstado.eventos || 0) + 
                  (notificacionesEstado.novedades || 0) + 
                  (notificacionesEstado.noticias || 0);
    
    const badgePrincipal = document.getElementById('notificacionesBadge');
    if (badgePrincipal) {
        if (total > 0) {
            badgePrincipal.textContent = total > 99 ? '99+' : total;
            badgePrincipal.style.display = 'flex';
            badgePrincipal.style.visibility = 'visible';
            badgePrincipal.style.opacity = '1';
            badgePrincipal.classList.add('visible');
            console.log(`🔔 Campana actualizada (Eventos): ${total} notificaciones`);
        } else {
            badgePrincipal.style.display = 'none';
            badgePrincipal.style.visibility = 'hidden';
            badgePrincipal.style.opacity = '0';
            badgePrincipal.textContent = '0';
            badgePrincipal.classList.remove('visible');
            console.log('🔔 Campana oculta (0 notificaciones)');
        }
    }
    
    console.log('✅ Eventos: marcados como leídos, badge reseteados a 0');

    // LUEGO: Renderizar los eventos
    eventos.forEach(evento => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-evento';

        let redesHTML = '';
        if (evento.whatsapp) redesHTML += `<a href="https://wa.me/${evento.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="wsp-tarjeta"><i class="fab fa-whatsapp"></i></a>`;
        if (evento.instagram) redesHTML += `<a href="https://instagram.com/${evento.instagram.replace('@', '')}" target="_blank" class="ig-tarjeta"><i class="fab fa-instagram"></i></a>`;
        if (evento.facebook) redesHTML += `<a href="https://facebook.com/${evento.facebook}" target="_blank" class="fb-tarjeta"><i class="fab fa-facebook"></i></a>`;
        if (evento.twitter) redesHTML += `<a href="https://twitter.com/${evento.twitter.replace('@', '')}" target="_blank" class="tw-tarjeta"><i class="fab fa-twitter"></i></a>`;
        if (evento.website) redesHTML += `<a href="https://${evento.website}" target="_blank" class="web-tarjeta"><i class="fas fa-globe"></i></a>`;

        tarjeta.innerHTML = `
            <img class="foto" src="${evento.foto || 'https://picsum.photos/seed/evento'+evento.id+'/400/200'}" alt="${evento.nombre}" loading="lazy">
            <div class="titulo">${evento.nombre}</div>
            <div class="fecha">📅 ${evento.fecha || 'Fecha por confirmar'}</div>
            <div class="ubicacion">📍 ${evento.direccion || 'Sin dirección'}</div>
            <div class="descripcion">${evento.descripcion || ''}</div>
            ${redesHTML ? `<div class="redes-tarjeta">${redesHTML}</div>` : ''}
            <button class="btn-ir" data-lat="${evento.coordenadas[0]}" data-lng="${evento.coordenadas[1]}">
                <i class="fas fa-route"></i> Ir
            </button>
        `;
        contenedor.appendChild(tarjeta);
    });

    document.querySelectorAll('.btn-ir').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const lat = this.dataset.lat;
            const lng = this.dataset.lng;
            if (userLocation) {
                const url = `https://www.google.com/maps/dir/${userLocation[0]},${userLocation[1]}/${lat},${lng}`;
                window.open(url, '_blank');
            } else {
                const url = `https://www.google.com/maps?q=${lat},${lng}`;
                window.open(url, '_blank');
            }
        });
    });
}

function renderizarNovedades() {
    const contenedor = document.getElementById('listaNovedades');
    contenedor.innerHTML = '';

    // PRIMERO: Marcar todos como leídos
    novedades.forEach(novedad => marcarComoLeido('novedades', novedad.id));
    guardarLeidos();
    
    // SEGUNDO: Actualizar el estado a 0
    notificacionesEstado.novedades = 0;
    
    // TERCERO: FORZAR actualización de badges - Método directo
    const badgeNovedades = document.getElementById('menuBadgeNovedades');
    if (badgeNovedades) {
        badgeNovedades.style.display = 'none';
        badgeNovedades.style.visibility = 'hidden';
        badgeNovedades.style.opacity = '0';
        badgeNovedades.textContent = '0';
        badgeNovedades.classList.remove('visible');
        badgeNovedades.classList.remove('max');
    }
    
    const badgeTitulo = document.getElementById('badgeNovedades');
    if (badgeTitulo) {
        badgeTitulo.style.display = 'none';
        badgeTitulo.style.visibility = 'hidden';
        badgeTitulo.style.opacity = '0';
        badgeTitulo.textContent = '0';
        badgeTitulo.classList.remove('visible');
        badgeTitulo.classList.remove('max');
    }
    
    // CUARTO: ACTUALIZAR LA CAMPANA CORRECTAMENTE
    const total = (notificacionesEstado.eventos || 0) + 
                  (notificacionesEstado.novedades || 0) + 
                  (notificacionesEstado.noticias || 0);
    
    const badgePrincipal = document.getElementById('notificacionesBadge');
    if (badgePrincipal) {
        if (total > 0) {
            badgePrincipal.textContent = total > 99 ? '99+' : total;
            badgePrincipal.style.display = 'flex';
            badgePrincipal.style.visibility = 'visible';
            badgePrincipal.style.opacity = '1';
            badgePrincipal.classList.add('visible');
            console.log(`🔔 Campana actualizada (Novedades): ${total} notificaciones`);
        } else {
            badgePrincipal.style.display = 'none';
            badgePrincipal.style.visibility = 'hidden';
            badgePrincipal.style.opacity = '0';
            badgePrincipal.textContent = '0';
            badgePrincipal.classList.remove('visible');
            console.log('🔔 Campana oculta (0 notificaciones)');
        }
    }
    
    console.log('✅ Novedades: marcados como leídos, badge reseteados a 0');

    // LUEGO: Renderizar las novedades
    novedades.forEach(novedad => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-novedad';

        let redesHTML = '';
        if (novedad.whatsapp) redesHTML += `<a href="https://wa.me/${novedad.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="wsp-tarjeta"><i class="fab fa-whatsapp"></i></a>`;
        if (novedad.instagram) redesHTML += `<a href="https://instagram.com/${novedad.instagram.replace('@', '')}" target="_blank" class="ig-tarjeta"><i class="fab fa-instagram"></i></a>`;
        if (novedad.facebook) redesHTML += `<a href="https://facebook.com/${novedad.facebook}" target="_blank" class="fb-tarjeta"><i class="fab fa-facebook"></i></a>`;
        if (novedad.twitter) redesHTML += `<a href="https://twitter.com/${novedad.twitter.replace('@', '')}" target="_blank" class="tw-tarjeta"><i class="fab fa-twitter"></i></a>`;
        if (novedad.website) redesHTML += `<a href="https://${novedad.website}" target="_blank" class="web-tarjeta"><i class="fas fa-globe"></i></a>`;

        tarjeta.innerHTML = `
            <img class="foto" src="${novedad.foto || 'https://picsum.photos/seed/novedad'+novedad.id+'/400/200'}" alt="${novedad.nombre}" loading="lazy">
            <div class="titulo">${novedad.nombre}</div>
            <div class="fecha">📅 ${novedad.fecha || 'Fecha por confirmar'}</div>
            <div class="descripcion">${novedad.descripcion || ''}</div>
            ${redesHTML ? `<div class="redes-tarjeta">${redesHTML}</div>` : ''}
        `;
        contenedor.appendChild(tarjeta);
    });
}

function renderizarNoticias() {
    const contenedor = document.getElementById('listaNoticias');
    contenedor.innerHTML = '';

    // PRIMERO: Marcar todos como leídos
    noticias.forEach(noticia => marcarComoLeido('noticias', noticia.id));
    guardarLeidos();
    
    // SEGUNDO: Actualizar el estado a 0
    notificacionesEstado.noticias = 0;
    
    // TERCERO: FORZAR actualización de badges - Método directo
    const badgeNoticias = document.getElementById('menuBadgeNoticias');
    if (badgeNoticias) {
        badgeNoticias.style.display = 'none';
        badgeNoticias.style.visibility = 'hidden';
        badgeNoticias.style.opacity = '0';
        badgeNoticias.textContent = '0';
        badgeNoticias.classList.remove('visible');
        badgeNoticias.classList.remove('max');
    }
    
    const badgeTitulo = document.getElementById('badgeNoticias');
    if (badgeTitulo) {
        badgeTitulo.style.display = 'none';
        badgeTitulo.style.visibility = 'hidden';
        badgeTitulo.style.opacity = '0';
        badgeTitulo.textContent = '0';
        badgeTitulo.classList.remove('visible');
        badgeTitulo.classList.remove('max');
    }
    
    // CUARTO: ACTUALIZAR LA CAMPANA CORRECTAMENTE
    const total = (notificacionesEstado.eventos || 0) + 
                  (notificacionesEstado.novedades || 0) + 
                  (notificacionesEstado.noticias || 0);
    
    const badgePrincipal = document.getElementById('notificacionesBadge');
    if (badgePrincipal) {
        if (total > 0) {
            badgePrincipal.textContent = total > 99 ? '99+' : total;
            badgePrincipal.style.display = 'flex';
            badgePrincipal.style.visibility = 'visible';
            badgePrincipal.style.opacity = '1';
            badgePrincipal.classList.add('visible');
            console.log(`🔔 Campana actualizada (Noticias): ${total} notificaciones`);
        } else {
            badgePrincipal.style.display = 'none';
            badgePrincipal.style.visibility = 'hidden';
            badgePrincipal.style.opacity = '0';
            badgePrincipal.textContent = '0';
            badgePrincipal.classList.remove('visible');
            console.log('🔔 Campana oculta (0 notificaciones)');
        }
    }
    
    console.log('✅ Noticias: marcados como leídos, badge reseteados a 0');

    // LUEGO: Renderizar las noticias
    noticias.forEach(noticia => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-noticia';

        let redesHTML = '';
        if (noticia.whatsapp) redesHTML += `<a href="https://wa.me/${noticia.whatsapp.replace(/[^0-9]/g, '')}" target="_blank" class="wsp-tarjeta"><i class="fab fa-whatsapp"></i></a>`;
        if (noticia.instagram) redesHTML += `<a href="https://instagram.com/${noticia.instagram.replace('@', '')}" target="_blank" class="ig-tarjeta"><i class="fab fa-instagram"></i></a>`;
        if (noticia.facebook) redesHTML += `<a href="https://facebook.com/${noticia.facebook}" target="_blank" class="fb-tarjeta"><i class="fab fa-facebook"></i></a>`;
        if (noticia.twitter) redesHTML += `<a href="https://twitter.com/${noticia.twitter.replace('@', '')}" target="_blank" class="tw-tarjeta"><i class="fab fa-twitter"></i></a>`;
        if (noticia.website) redesHTML += `<a href="https://${noticia.website}" target="_blank" class="web-tarjeta"><i class="fas fa-globe"></i></a>`;

        tarjeta.innerHTML = `
            <img class="foto" src="${noticia.foto || 'https://picsum.photos/seed/noticia'+noticia.id+'/400/200'}" alt="${noticia.nombre}" loading="lazy">
            <div class="titulo">${noticia.nombre}</div>
            <div class="fecha">📅 ${noticia.fecha || 'Fecha por confirmar'}</div>
            <div class="descripcion">${noticia.descripcion || ''}</div>
            ${redesHTML ? `<div class="redes-tarjeta">${redesHTML}</div>` : ''}
        `;
        contenedor.appendChild(tarjeta);
    });
}

// ============================================================
//  19. MENÚ INFERIOR Y NAVEGACIÓN
// ============================================================
function ocultarMenu(ocultar) {
    const menu = document.getElementById('menu-secciones');
    if (ocultar) {
        menu.classList.add('oculto');
    } else {
        menu.classList.remove('oculto');
    }
}

function ocultarTodasSeccionesYMostrarMapa() {
    document.getElementById('seccion-eventos').style.display = 'none';
    document.getElementById('seccion-novedades').style.display = 'none';
    document.getElementById('seccion-noticias').style.display = 'none';
    document.getElementById('seccion-admin').style.display = 'none';
    document.getElementById('map').style.display = 'block';
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btnVerMapa').classList.add('active');
    ocultarMenu(false);
    const footer = document.querySelector('footer');
    if (footer) footer.classList.remove('oculto');
    setTimeout(() => {
        map.invalidateSize();
    }, 300);
}

document.getElementById('btnVerEventos').addEventListener('click', () => {
    document.getElementById('seccion-eventos').style.display = 'flex';
    document.getElementById('seccion-novedades').style.display = 'none';
    document.getElementById('seccion-noticias').style.display = 'none';
    document.getElementById('seccion-admin').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btnVerEventos').classList.add('active');
    ocultarMenu(false);
    renderizarEventos();
});

document.getElementById('btnVerNovedades').addEventListener('click', () => {
    document.getElementById('seccion-eventos').style.display = 'none';
    document.getElementById('seccion-novedades').style.display = 'flex';
    document.getElementById('seccion-noticias').style.display = 'none';
    document.getElementById('seccion-admin').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btnVerNovedades').classList.add('active');
    ocultarMenu(false);
    renderizarNovedades();
});

document.getElementById('btnVerNoticias').addEventListener('click', () => {
    document.getElementById('seccion-eventos').style.display = 'none';
    document.getElementById('seccion-novedades').style.display = 'none';
    document.getElementById('seccion-noticias').style.display = 'flex';
    document.getElementById('seccion-admin').style.display = 'none';
    document.getElementById('map').style.display = 'none';
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btnVerNoticias').classList.add('active');
    ocultarMenu(false);
    renderizarNoticias();
});

document.getElementById('btnVerMapa').addEventListener('click', ocultarTodasSeccionesYMostrarMapa);
document.getElementById('btnCerrarEventos').addEventListener('click', ocultarTodasSeccionesYMostrarMapa);
document.getElementById('btnCerrarNovedades').addEventListener('click', ocultarTodasSeccionesYMostrarMapa);
document.getElementById('btnCerrarNoticias').addEventListener('click', ocultarTodasSeccionesYMostrarMapa);
document.getElementById('btnCerrarAdmin').addEventListener('click', ocultarTodasSeccionesYMostrarMapa);

// ============================================================
//  20. ADMIN - Doble click en logo
// ============================================================
let adminClicks = 0;
let adminTimer = null;

document.querySelector('.logo').addEventListener('dblclick', function(e) {
    e.preventDefault();
    adminClicks++;
    if (adminTimer) clearTimeout(adminTimer);
    adminTimer = setTimeout(() => {
        adminClicks = 0;
    }, 3000);

    if (adminClicks >= 2) {
        adminClicks = 0;
        const adminBtn = document.getElementById('btnVerAdmin');
        if (adminBtn.style.display === 'none' || adminBtn.style.display === '') {
            adminBtn.style.display = 'flex';
            alert('🔑 Panel de administración activado');
        } else {
            adminBtn.style.display = 'none';
            alert('🔒 Panel de administración desactivado');
        }
    }
});

document.getElementById('btnVerAdmin').addEventListener('click', () => {
    document.getElementById('seccion-eventos').style.display = 'none';
    document.getElementById('seccion-novedades').style.display = 'none';
    document.getElementById('seccion-noticias').style.display = 'none';
    document.getElementById('seccion-admin').style.display = 'flex';
    document.getElementById('map').style.display = 'none';
    document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('btnVerAdmin').classList.add('active');
    ocultarMenu(false);
});

// ============================================================
//  21. INICIALIZAR
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando aplicación...');
    console.log('🌄 Capilla del Monte - Guía Turística');
    console.log('📍 Lugares cargados:', lugares.length);
    console.log('📅 Eventos cargados:', eventos.length);
    console.log('📰 Novedades cargadas:', novedades.length);
    console.log('📢 Noticias cargadas:', noticias.length);

    cargarLeidos();
    cargarConfigNotificaciones();
    iniciarGeolocalizacion();

    document.getElementById('map').style.display = 'block';
    document.getElementById('seccion-eventos').style.display = 'none';
    document.getElementById('seccion-novedades').style.display = 'none';
    document.getElementById('seccion-noticias').style.display = 'none';
    document.getElementById('seccion-admin').style.display = 'none';

    setTimeout(() => {
        console.log('🔔 Calculando notificaciones iniciales...');
        recalcularTodasLasNotificaciones();
        console.log('📊 Estado inicial:', notificacionesEstado);
        console.log('📝 Leídos:', {
            eventos: leidos.eventos.size,
            novedades: leidos.novedades.size,
            noticias: leidos.noticias.size
        });
    }, 500);

    console.log('✅ App inicializada correctamente');
});

// ============================================================
//  22. INICIALIZACIÓN DE NOTIFICACIONES CON PERSISTENCIA
// ============================================================

function debugNotificaciones() {
    console.log('🔍 DEBUG - Estado actual:');
    console.log('📊 Notificaciones estado:', notificacionesEstado);
    console.log('📝 Leídos:', {
        eventos: leidos.eventos.size,
        novedades: leidos.novedades.size,
        noticias: leidos.noticias.size
    });
    console.log('💾 LocalStorage:', localStorage.getItem('capilla_leidos_v2'));
}

window.mostrarBadges = function() {
    console.log('🔧 Forzando actualización de badges...');
    recalcularTodasLasNotificaciones();
    console.log('✅ Badges actualizados');
};

window.resetearLeidos = function() {
    console.log('⚠️ RESETEANDO TODOS LOS LEÍDOS...');
    leidos.eventos = new Set();
    leidos.novedades = new Set();
    leidos.noticias = new Set();
    guardarLeidos();
    recalcularTodasLasNotificaciones();
    console.log('✅ Todos los leídos fueron reseteados');
};

console.log('🔄 Inicializando sistema de notificaciones con persistencia...');

setTimeout(() => {
    console.log('🔔 Verificando estado de notificaciones...');
    console.log('📊 Notificaciones:', notificacionesEstado);
    console.log('📝 Leídos guardados:', {
        eventos: leidos.eventos.size,
        novedades: leidos.novedades.size,
        noticias: leidos.noticias.size
    });
    recalcularTodasLasNotificaciones();
}, 1000);

console.log('✅ Sistema de notificaciones con persistencia listo');
console.log('💡 Comandos útiles:');
console.log('  - mostrarBadges() : Forzar actualización de badges');
console.log('  - debugNotificaciones() : Ver estado actual');
console.log('  - resetearLeidos() : Resetear todos los leídos (solo pruebas)');

// ============================================================
//  23. MEJORAS PARA MÓVILES Y CLICK EN LUGARES CERCANOS
// ============================================================

console.log('📱 Aplicando mejoras para móviles...');

// ============================================================
// 23.1 AJUSTAR BADGES PARA MÓVILES - NÚMEROS MÁS PEQUEÑOS
// ============================================================

function ajustarBadgesParaMovil() {
    const isMobile = window.innerWidth <= 768;
    
    const sizes = isMobile ? {
        badgeSize: '16px',
        fontSize: '8px',
        topPosition: '-4px',
        rightPosition: '-4px',
        padding: '0 3px',
        minWidth: '16px',
        height: '16px',
        borderWidth: '2px',
        maxFontSize: '8px'
    } : {
        badgeSize: '22px',
        fontSize: '11px',
        topPosition: '-7px',
        rightPosition: '-7px',
        padding: '0 6px',
        minWidth: '22px',
        height: '22px',
        borderWidth: '2.5px',
        maxFontSize: '11px'
    };
    
    const badges = [
        'menuBadgeEventos',
        'menuBadgeNovedades',
        'menuBadgeNoticias'
    ];
    
    badges.forEach(id => {
        const badge = document.getElementById(id);
        if (badge) {
            const contador = parseInt(badge.textContent) || 0;
            
            badge.style.minWidth = sizes.minWidth;
            badge.style.height = sizes.height;
            badge.style.fontSize = sizes.fontSize;
            badge.style.top = sizes.topPosition;
            badge.style.right = sizes.rightPosition;
            badge.style.padding = sizes.padding;
            badge.style.border = `${sizes.borderWidth} solid white`;
            badge.style.boxShadow = '0 2px 6px rgba(0,0,0,0.25)';
            badge.style.background = '#FF3B30';
            badge.style.color = 'white';
            badge.style.fontWeight = '700';
            badge.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
            badge.style.letterSpacing = '0.3px';
            badge.style.lineHeight = '1';
            badge.style.borderRadius = '50%';
            badge.style.display = 'flex';
            badge.style.alignItems = 'center';
            badge.style.justifyContent = 'center';
            badge.style.position = 'absolute';
            badge.style.zIndex = '99999';
            badge.style.pointerEvents = 'none';
            badge.style.transition = 'none';
            badge.style.transform = 'none';
            badge.style.animation = 'none';
            
            if (isMobile && contador >= 10) {
                badge.style.fontSize = '7px';
                badge.style.minWidth = '18px';
                badge.style.padding = '0 2px';
            }
            
            if (isMobile && contador >= 100) {
                badge.style.fontSize = '6px';
                badge.style.minWidth = '20px';
                badge.style.padding = '0 2px';
            }
            
            if (contador === 0) {
                badge.style.display = 'none';
                badge.style.visibility = 'hidden';
                badge.style.opacity = '0';
            } else {
                badge.style.display = 'flex';
                badge.style.visibility = 'visible';
                badge.style.opacity = '1';
            }
        }
    });
    
    const campana = document.getElementById('notificacionesBadge');
    if (campana) {
        const contador = parseInt(campana.textContent) || 0;
        
        const campanaSize = isMobile ? {
            minWidth: '14px',
            height: '14px',
            fontSize: '7px',
            top: '-3px',
            right: '-3px',
            padding: '0 2px',
            borderWidth: '2px'
        } : {
            minWidth: '20px',
            height: '20px',
            fontSize: '10px',
            top: '-6px',
            right: '-6px',
            padding: '0 5px',
            borderWidth: '2.5px'
        };
        
        campana.style.minWidth = campanaSize.minWidth;
        campana.style.height = campanaSize.height;
        campana.style.fontSize = campanaSize.fontSize;
        campana.style.top = campanaSize.top;
        campana.style.right = campanaSize.right;
        campana.style.padding = campanaSize.padding;
        campana.style.border = `${campanaSize.borderWidth} solid white`;
        campana.style.boxShadow = '0 2px 6px rgba(0,0,0,0.25)';
        campana.style.background = '#FF3B30';
        campana.style.color = 'white';
        campana.style.fontWeight = '700';
        campana.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
        campana.style.letterSpacing = '0.3px';
        campana.style.lineHeight = '1';
        campana.style.borderRadius = '50%';
        campana.style.display = 'flex';
        campana.style.alignItems = 'center';
        campana.style.justifyContent = 'center';
        campana.style.position = 'absolute';
        campana.style.zIndex = '99999';
        campana.style.pointerEvents = 'none';
        campana.style.transition = 'none';
        campana.style.transform = 'none';
        campana.style.animation = 'none';
        
        if (isMobile && contador >= 10) {
            campana.style.fontSize = '6px';
            campana.style.minWidth = '16px';
            campana.style.padding = '0 2px';
        }
        
        if (isMobile && contador >= 100) {
            campana.style.fontSize = '5px';
            campana.style.minWidth = '18px';
            campana.style.padding = '0 2px';
        }
        
        if (contador === 0) {
            campana.style.display = 'none';
            campana.style.visibility = 'hidden';
            campana.style.opacity = '0';
        } else {
            campana.style.display = 'flex';
            campana.style.visibility = 'visible';
            campana.style.opacity = '1';
        }
    }
}

ajustarBadgesParaMovil();
window.addEventListener('resize', ajustarBadgesParaMovil);

const actualizarBadgesOriginalMovil = actualizarBadges;
actualizarBadges = function() {
    actualizarBadgesOriginalMovil();
    setTimeout(ajustarBadgesParaMovil, 50);
};

console.log('✅ Badges ajustados para móviles con números más pequeños');

// ============================================================
// 23.2 HACER CLICKEABLE LOS ITEMS DE LUGARES CERCANOS
// ============================================================

function buscarYMostrarLugar(nombre) {
    console.log(`🔍 Buscando lugar: "${nombre}"`);
    
    const lugarEncontrado = lugares.find(lugar => 
        lugar.nombre.toLowerCase().trim() === nombre.toLowerCase().trim()
    );
    
    if (lugarEncontrado) {
        console.log(`✅ Lugar encontrado: ${lugarEncontrado.nombre}`);
        mostrarInfoLugar(lugarEncontrado);
        
        const modal = document.getElementById('modalCercanos');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 400);
        }
    } else {
        console.warn(`❌ No se encontró el lugar: "${nombre}"`);
        const coincidencia = lugares.find(lugar => 
            lugar.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
            nombre.toLowerCase().includes(lugar.nombre.toLowerCase())
        );
        if (coincidencia) {
            console.log(`✅ Coincidencia encontrada: ${coincidencia.nombre}`);
            mostrarInfoLugar(coincidencia);
            
            const modal = document.getElementById('modalCercanos');
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 400);
            }
        }
    }
}

const mostrarListaCercanosOriginal = mostrarListaCercanos;
mostrarListaCercanos = function(cercanos) {
    mostrarListaCercanosOriginal(cercanos);
    
    setTimeout(() => {
        const items = document.querySelectorAll('.item-lugar');
        items.forEach(item => {
            const nuevoItem = item.cloneNode(true);
            item.parentNode.replaceChild(nuevoItem, item);
            
            nuevoItem.addEventListener('click', function() {
                const nombre = this.querySelector('.nombre')?.textContent;
                if (nombre) {
                    buscarYMostrarLugar(nombre);
                }
            });
            
            nuevoItem.style.cursor = 'pointer';
            nuevoItem.style.transition = 'background 0.2s';
            nuevoItem.addEventListener('mouseenter', function() {
                this.style.background = 'rgba(0,0,0,0.05)';
            });
            nuevoItem.addEventListener('mouseleave', function() {
                this.style.background = 'transparent';
            });
        });
        
        console.log('✅ Items de lugares cercanos ahora son clickeables');
    }, 100);
};

function hacerClickeablesItemsExistentes() {
    const items = document.querySelectorAll('.item-lugar');
    items.forEach(item => {
        if (!item._clickable) {
            item._clickable = true;
            const nombre = item.querySelector('.nombre')?.textContent;
            if (nombre) {
                item.addEventListener('click', function() {
                    buscarYMostrarLugar(nombre);
                });
                item.style.cursor = 'pointer';
                item.style.transition = 'background 0.2s';
                item.addEventListener('mouseenter', function() {
                    this.style.background = 'rgba(0,0,0,0.05)';
                });
                item.addEventListener('mouseleave', function() {
                    this.style.background = 'transparent';
                });
            }
        }
    });
}

setTimeout(hacerClickeablesItemsExistentes, 500);

const observerCercanos = new MutationObserver(function(mutations) {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.classList && node.classList.contains('item-lugar')) {
                        const nombre = node.querySelector('.nombre')?.textContent;
                        if (nombre && !node._clickable) {
                            node._clickable = true;
                            node.addEventListener('click', function() {
                                buscarYMostrarLugar(nombre);
                            });
                            node.style.cursor = 'pointer';
                            node.style.transition = 'background 0.2s';
                            node.addEventListener('mouseenter', function() {
                                this.style.background = 'rgba(0,0,0,0.05)';
                            });
                            node.addEventListener('mouseleave', function() {
                                this.style.background = 'transparent';
                            });
                        }
                    }
                }
            });
        }
    });
});

observerCercanos.observe(document.body, {
    childList: true,
    subtree: true
});

console.log('✅ Lugares cercanos ahora son clickeables');
console.log('💡 Click en cualquier lugar de la lista para ver su información');

// ============================================================
//  24. ACTUALIZACIÓN AUTOMÁTICA DE NOTIFICACIONES EN TIEMPO REAL
// ============================================================

console.log('⏰ Activando actualización automática de notificaciones en tiempo real...');

// Variable para controlar notificaciones mostradas
let notificacionesMostradas = {
    eventos: new Set(),
    novedades: new Set(),
    noticias: new Set()
};

// ============================================================
// 24.1 FUNCIONES PARA MANEJAR NOTIFICACIONES EN TIEMPO REAL
// ============================================================

// Función que verifica si hay cambios en las notificaciones
function verificarCambiosNotificaciones() {
    console.log('🔍 Verificando cambios en notificaciones...');
    
    // Guardar el estado anterior
    const estadoAnterior = {
        eventos: notificacionesEstado.eventos || 0,
        novedades: notificacionesEstado.novedades || 0,
        noticias: notificacionesEstado.noticias || 0
    };
    
    // RECALCULAR COMPLETAMENTE desde cero
    const eventosNoLeidos = contarNoLeidos('eventos', eventos);
    const novedadesNoLeidos = contarNoLeidos('novedades', novedades);
    const noticiasNoLeidos = contarNoLeidos('noticias', noticias);

    notificacionesEstado.eventos = eventosNoLeidos;
    notificacionesEstado.novedades = novedadesNoLeidos;
    notificacionesEstado.noticias = noticiasNoLeidos;

    console.log('📊 Estado actual:', notificacionesEstado);
    console.log('📊 Estado anterior:', estadoAnterior);

    // Verificar si hubo cambios
    const huboCambios = 
        estadoAnterior.eventos !== notificacionesEstado.eventos ||
        estadoAnterior.novedades !== notificacionesEstado.novedades ||
        estadoAnterior.noticias !== notificacionesEstado.noticias;

    if (huboCambios) {
        console.log('🔄 Cambios detectados en notificaciones!');
        
        // Verificar qué aumentó
        const nuevosEventos = notificacionesEstado.eventos - estadoAnterior.eventos;
        const nuevasNovedades = notificacionesEstado.novedades - estadoAnterior.novedades;
        const nuevasNoticias = notificacionesEstado.noticias - estadoAnterior.noticias;
        
        // Mostrar toasts solo si AUMENTÓ
        if (nuevosEventos > 0) {
            console.log(`📢 ${nuevosEventos} NUEVO(S) EVENTO(S) DETECTADO(S)!`);
            mostrarNotificacionToast(`📅 ${nuevosEventos} nuevo(s) evento(s) disponible(s)!`);
        }
        if (nuevasNovedades > 0) {
            console.log(`📢 ${nuevasNovedades} NUEVA(S) NOVEDAD(ES) DETECTADA(S)!`);
            mostrarNotificacionToast(`📰 ${nuevasNovedades} nueva(s) novedad(es) disponible(s)!`);
        }
        if (nuevasNoticias > 0) {
            console.log(`📢 ${nuevasNoticias} NUEVA(S) NOTICIA(S) DETECTADA(S)!`);
            mostrarNotificacionToast(`📢 ${nuevasNoticias} nueva(s) noticia(s) disponible(s)!`);
        }
        
        // ACTUALIZAR TODOS LOS BADGES (incluyendo la campana)
        actualizarBadges();
        
        // Guardar estado
        guardarEstadoNotificaciones();
        
        console.log('✅ Badges actualizados correctamente');
    } else {
        console.log('✅ Sin cambios en notificaciones');
    }
}

// Función para mostrar un toast de notificación
function mostrarNotificacionToast(mensaje) {
    console.log(`🔔 TOAST: ${mensaje}`);
    
    // Verificar si ya existe un toast
    let toast = document.getElementById('toastNotificacion');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toastNotificacion';
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(46, 125, 50, 0.95);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 14px;
            font-weight: 600;
            z-index: 99999;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            backdrop-filter: blur(8px);
            font-family: 'Nunito', sans-serif;
            max-width: 90%;
            text-align: center;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
            pointer-events: none;
            border: 1px solid rgba(255,255,255,0.2);
        `;
        document.body.appendChild(toast);
    }
    
    // Actualizar mensaje
    toast.textContent = mensaje;
    
    // Mostrar toast con animación
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);
    
    // Ocultar después de 4 segundos
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 4000);
}

// ============================================================
// 24.2 FUNCIÓN PARA GUARDAR ESTADO
// ============================================================

function guardarEstadoNotificaciones() {
    try {
        const estado = {
            eventos: notificacionesEstado.eventos,
            novedades: notificacionesEstado.novedades,
            noticias: notificacionesEstado.noticias,
            timestamp: Date.now()
        };
        localStorage.setItem('capilla_notificaciones_estado', JSON.stringify(estado));
    } catch (e) {
        console.error('Error guardando estado:', e);
    }
}

function restaurarEstadoNotificaciones() {
    try {
        const guardado = localStorage.getItem('capilla_notificaciones_estado');
        if (guardado) {
            const estado = JSON.parse(guardado);
            if (Date.now() - estado.timestamp < 300000) {
                notificacionesEstado.eventos = estado.eventos;
                notificacionesEstado.novedades = estado.novedades;
                notificacionesEstado.noticias = estado.noticias;
                return true;
            }
        }
    } catch (e) {
        console.error('Error restaurando estado:', e);
    }
    return false;
}

// ============================================================
// 24.3 FUNCIÓN PARA FORZAR ACTUALIZACIÓN DESDE CUALQUIER LUGAR
// ============================================================

window.forzarActualizacionNotificaciones = function() {
    console.log('🔧 Forzando actualización de notificaciones manualmente...');
    verificarCambiosNotificaciones();
    console.log('✅ Notificaciones actualizadas manualmente');
};

// ============================================================
// 24.4 INICIALIZACIÓN DEL SISTEMA EN TIEMPO REAL
// ============================================================

// Verificar inmediatamente al cargar
setTimeout(() => {
    console.log('🔍 Verificación inicial de notificaciones...');
    verificarCambiosNotificaciones();
}, 500);

// Verificar cada 3 segundos (más rápido para tiempo real)
setInterval(() => {
    if (!document.hidden) {
        verificarCambiosNotificaciones();
    } else {
        console.log('⏸️ Página en segundo plano, pausando verificación');
    }
}, 3000);

// Verificar cuando la página vuelve a ser visible
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        console.log('👁️ Página visible nuevamente, verificando notificaciones...');
        setTimeout(verificarCambiosNotificaciones, 100);
    }
});

// Verificar clics en el panel de administración
document.addEventListener('click', function(e) {
    const target = e.target;
    if (target.closest('#seccion-admin') || 
        target.closest('.btn-guardar') || 
        target.closest('.btn-agregar') ||
        target.closest('.admin-form')) {
        console.log('🔄 Posible cambio en admin, verificando notificaciones...');
        setTimeout(verificarCambiosNotificaciones, 500);
    }
});

console.log('✅ Sistema de notificaciones en tiempo real ACTIVADO');
console.log('💡 Las notificaciones se actualizarán automáticamente cada 3 segundos');
console.log('💡 Para forzar manualmente: forzarActualizacionNotificaciones()');

// ============================================================
//  25. INTERCEPTAR AGREGADO DE NUEVOS ELEMENTOS PARA NOTIFICAR EN TIEMPO REAL
// ============================================================

console.log('🔄 Activando interceptor de nuevos elementos...');

// ============================================================
// 25.1 FUNCIÓN PARA MARCAR NUEVOS ELEMENTOS COMO NO LEÍDOS
// ============================================================

function marcarNuevoElementoComoNoLeido(seccion, id) {
    console.log(`📌 Marcando nuevo ${seccion} ID ${id} como NO LEÍDO`);
    
    if (leidos[seccion]) {
        if (leidos[seccion].has(id)) {
            leidos[seccion].delete(id);
            console.log(`🔄 ID ${id} removido de leídos (será no leído)`);
        }
    }
    
    guardarLeidos();
    
    setTimeout(() => {
        verificarCambiosNotificaciones();
    }, 100);
}

// ============================================================
// 25.2 INTERCEPTAR FUNCIONES DE AGREGADO
// ============================================================

function interceptarPush(array, seccion, callback) {
    const originalPush = array.push;
    array.push = function(...items) {
        console.log(`📦 Push interceptado en ${seccion}`);
        const result = originalPush.apply(this, items);
        
        items.forEach(item => {
            if (item && item.id) {
                marcarNuevoElementoComoNoLeido(seccion, item.id);
            }
        });
        
        if (callback) callback();
        
        return result;
    };
}

// Interceptar los arrays
interceptarPush(eventos, 'eventos', () => {
    console.log('📢 Nuevo evento agregado!');
    mostrarNotificacionToast('📅 Nuevo evento disponible!');
});

interceptarPush(novedades, 'novedades', () => {
    console.log('📢 Nueva novedad agregada!');
    mostrarNotificacionToast('📰 Nueva novedad disponible!');
});

interceptarPush(noticias, 'noticias', () => {
    console.log('📢 Nueva noticia agregada!');
    mostrarNotificacionToast('📢 Nueva noticia disponible!');
});

console.log('✅ Interceptores de nuevos elementos activados');

// ============================================================
// 25.3 FUNCIONES DE PRUEBA PARA CONSOLA
// ============================================================

window.agregarEventoPrueba = function(nombre = 'Evento de prueba') {
    const nuevoEvento = {
        id: Date.now(),
        nombre: nombre,
        categoria: 'Evento',
        direccion: 'Dirección de prueba',
        coordenadas: [-30.8580, -64.5240],
        descripcion: 'Este es un evento de prueba agregado desde consola',
        fecha: new Date().toLocaleDateString(),
        foto: 'https://picsum.photos/seed/' + Date.now() + '/400/200'
    };
    eventos.push(nuevoEvento);
    console.log('✅ Evento de prueba agregado:', nuevoEvento);
    return nuevoEvento;
};

window.agregarNovedadPrueba = function(nombre = 'Novedad de prueba') {
    const nuevaNovedad = {
        id: Date.now(),
        nombre: nombre,
        categoria: 'Novedad',
        direccion: 'Dirección de prueba',
        coordenadas: [-30.8580, -64.5240],
        descripcion: 'Esta es una novedad de prueba agregada desde consola',
        fecha: new Date().toLocaleDateString(),
        foto: 'https://picsum.photos/seed/' + Date.now() + '/400/200'
    };
    novedades.push(nuevaNovedad);
    console.log('✅ Novedad de prueba agregada:', nuevaNovedad);
    return nuevaNovedad;
};

window.agregarNoticiaPrueba = function(nombre = 'Noticia de prueba') {
    const nuevaNoticia = {
        id: Date.now(),
        nombre: nombre,
        categoria: 'Noticia',
        direccion: 'Dirección de prueba',
        coordenadas: [-30.8580, -64.5240],
        descripcion: 'Esta es una noticia de prueba agregada desde consola',
        fecha: new Date().toLocaleDateString(),
        foto: 'https://picsum.photos/seed/' + Date.now() + '/400/200'
    };
    noticias.push(nuevaNoticia);
    console.log('✅ Noticia de prueba agregada:', nuevaNoticia);
    return nuevaNoticia;
};

console.log('💡 Funciones de prueba disponibles:');
console.log('  - agregarEventoPrueba("Nombre") : Agrega un evento de prueba');
console.log('  - agregarNovedadPrueba("Nombre") : Agrega una novedad de prueba');
console.log('  - agregarNoticiaPrueba("Nombre") : Agrega una noticia de prueba');
console.log('  - forzarActualizacionNotificaciones() : Forzar actualización manual');

export const COMPANY = {
  name: "Transportes y Servicios GASPI SpA", 
  fantasyName: "TRANSGASPI SpA",
  slogan: "Donde todo gran proyecto comienza",
  address: "Los Quincheros N°550, Lo Barnechea, Chile",
  email: "contacto.transgaspi@gmail.com",
  gerencia: "Maritza Ortega Espinoza",
  contacts: {
    nelson: { name: 'Nelson Ortega Espinoza', role: 'Jefe en Terreno', phone: '+569 7195 2395' },
    maritza: { name: 'Maritza Ortega Espinoza', role: 'Gerente General', phone: '+569 9579 1452' }
  }
};

export const IMAGES = {
  heroVideo: '/assets/HeroVideo1.mp4',
  headerGrua: '/assets/maquinarias/volswagen2.jpeg',
  porque: '/assets/maquinarias/faena6.jpeg',
  maquinaria: {
    'Excavadora Doosan DX 140LC': '/assets/maquinarias/doosan5.jpg',
    'Camión Tolva Volkswagen Constellation': '/assets/maquinarias/volswagen1.jpeg',
    'Retroexcavadora New Holland': '/assets/maquinarias/newholland1.jpeg',
    'Camión Tolva Sinotruk Sitrak G7': '/assets/maquinarias/sitrak2.jpeg',
    'Excavadora con Martillo Hidráulico': '/assets/maquinarias/doosan4.jpeg',
    'Remolque Industrial para Maquinaria Pesada': '/assets/maquinarias/transporte2.jpeg',
    'Transporte de Carga Especializada': '/assets/maquinarias/fardos.jpg',
    'Miniexcavadora Hitachi': '/assets/maquinarias/hitachi1.jpeg',
    'Remolque': '/assets/maquinarias/transporte1.jpeg',
    'Minicargador Bobcat': '/assets/maquinarias/bobcat6.jpeg',
    'Minicargador Bobcat con Martillo Hidráulico': '/assets/maquinarias/bobcat2.jpeg',
  }
};

export const PROJECTS = [
  {
    id: 1,
    client: 'Constructora Bitumix',
    projects: ['Lo Barnechea', 'Vitacura', 'General Velásquez', 'Obras varias'],
    services: ['Servicio de mantención de calzada', 'Veredas', 'Calle', 'Arriendo de camión', 'Arriendo de maquinaria', 'Demolición'],
    image: '/assets/logomarcas/bitumix.png'
  },
  {
    id: 2,
    client: 'Constructora IBL',
    projects: ['Lomas La Dehesa', 'Guay Guay', 'Carrizal', 'Brisas de Chicureo'],
    services: ['Movimiento de tierra', 'Demolición', 'Traslado de material', 'Arriendo de maquinaria', 'Venta de áridos'],
    image: '/assets/logomarcas/ConstructoraIBL.png'
  },
  {
    id: 3,
    client: 'Restaurante Chilenazo',
    projects: ['Estacionamientos'],
    services: ['Demolición'],
    image: '/assets/logomarcas/chilenazo.png'
  },
  {
    id: 4,
    client: 'Medialunas',
    projects: ['Lo Barnechea', 'Peldehue', 'Colina', 'Santa Filomena', 'Gil Letelier'],
    services: ['Reparaciones medialuna (piso y compactación)'],
    image: '/assets/logomarcas/gil-letelier.svg'
  },
  {
    id: 5,
    client: 'Constructora C1 Limitada',
    projects: ['Carolina Rabat', 'QIU', 'Lomas de la Dehesa', 'Obras varias'],
    services: ['Movimiento de tierra', 'Demoliciones', 'Traslado de materiales', 'Traslado de áridos', 'Arriendo de maquinaria'],
    image: '/assets/logomarcas/C1.jpg'
  },
  {
    id: 6,
    client: 'Club de Golf Lomas de la Dehesa',
    projects: ['Obra Club de Golf', 'Obras varias'],
    services: ['Movimiento de tierra', 'Demoliciones', 'Traslado de materiales', 'Traslado de áridos', 'Arriendo de maquinaria', 'Arriendo diario camión'],
    image: '/assets/logomarcas/golf.jpg'
  },
  {
    id: 7,
    client: 'Constructora Francisco Álvarez',
    projects: ['Obra Musso', 'Obra Piedra Roja', 'Obras varias'],
    services: ['Movimiento de tierra', 'Demoliciones'],
    image: '/assets/logomarcas/alvarez.png'
  },
  {
    id: 8,
    client: 'CHINA RAILWAY TUNNEL GROUP CO., LTD Sucursal Chile',
    projects: ['Pique Santa Cruz', 'Hospital del Pino', 'Metro estaciones varias'],
    services: ['Movimiento de tierra', 'Excavaciones', 'Arriendo de maquinaria'],
    image: '/assets/logomarcas/crtg.jpg'
  },
  {
    id: 9,
    client: 'Ingex Limitada',
    projects: ['San Cristóbal'],
    services: ['Traslados de material'],
    image: '/assets/logomarcas/ingex.jpg'
  },
  {
    id: 10,
    client: 'EBCO',
    projects: ['Obra Punta de Águila', 'Edificio Cerrillos (San Andrés)', 'Obras varias'],
    services: ['Compra/venta de áridos', 'Arriendo de camión', 'Arriendo de maquinaria','Movimiento de tierra','Traslado de materiales', 'Demolición'],
    image: '/assets/logomarcas/ebco.jpg'
  },
  {
  id: 11,
  client: 'INLAC',
  projects: [
    'Estanques San José de Chucunco',
    'Estanques San Enrique',
    'Acueducto y Colector El Carmen',
    'Santa Blanca',
    'Vitacura',
    'Metro Baquedano',
    'Obras varias'
  ],
  services: ['Movimiento de tierra', 'Demoliciones', 'Traslado de materiales', 'Traslado de áridos', 'Arriendo de maquinaria'],
  image: '/assets/logomarcas/inlac.jpeg',
}
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Gerente de Operaciones',
    company: 'Constructora Bitumix',
    quote: 'La puntualidad y el excelente estado de la maquinaria de TRANSGASPI marcaron una diferencia enorme en nuestra última faena. Son socios estratégicos indispensables.'
  },
  {
    id: 2,
    name: 'Jefe de Terreno',
    company: 'Constructora Francisco Estrada',
    quote: 'La excavadora Doosan que arrendamos nos permitió avanzar mucho más rápido de lo previsto. Además, su soporte técnico realmente es 24/7, nos sacaron de un apuro.'
  },
  {
    id: 3,
    name: 'Administración',
    company: 'Restaurante Chilenazo',
    quote: 'Necesitábamos una demolición rápida y sin complicaciones. El equipo de TRANSGASPI fue profesional, ordenado y cumplieron con todo lo acordado en tiempo récord.'
  }
];

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Maquinaria', href: '#maquinaria' },
  { label: 'Nosotros', href: '#por-que' },
  { label: 'Proceso de cotización', href: '#proceso' },
  { label: 'Trabajos', href: '#proyectos' },
];

export const FILTER_TABS = [
  { label: 'Todas', key: 'all' },
  { label: 'Excavación', key: 'excavacion' },
  { label: 'Transporte', key: 'transporte' },
  { label: 'Otros', key: 'otros' },
];

export const MACHINES = [
  // --- EXCAVACIÓN ---
  {
    id: 1,
    name: 'Excavadora Doosan DX 140LC',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Excavadora de alto tonelaje para excavación general.',
    specs: [
      { key: 'Marca', val: 'Doosan' },
      { key: 'Modelo', val: 'DX 140LC' },
      { key: 'Año', val: '2015 / 2024' },
    ],
    waText: 'Hola Nelson, quiero cotizar la Excavadora Doosan DX 140LC'
  },
  {
    id: 2,
    name: 'Excavadora con Martillo Hidráulico',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Excavadora Doosan equipada con martillo para rotura de roca y demoliciones pesadas.',
    specs: [
      { key: 'Marca', val: 'Doosan' },
      { key: 'Modelo', val: 'DX 140LC' },
      { key: 'Año excavadora', val: '2015 / 2024' },
      { key: 'Año martillo', val: '2025' },
    ],
    waText: 'Hola Nelson, quiero cotizar la Excavadora con Martillo Hidráulico'
  },
  {
    id: 3,
    name: 'Retroexcavadora New Holland',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Máquina versátil para obras civiles y movimiento de tierra.',
    specs: [
      { key: 'Marca', val: 'New Holland' },
      { key: 'Año', val: '2018' },
    ],
    waText: 'Hola Nelson, quiero cotizar la Retroexcavadora New Holland'
  },
  {
    id: 4,
    name: 'Miniexcavadora Hitachi',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Miniexcavadora para trabajos de precisión en espacios reducidos',
    specs: [
      { key: 'Marca', val: 'Hitachi' },
      { key: 'Modelo', val: 'ZX60C' },
      { key: 'Año', val: '2022' },
    ],
    waText: 'Hola Nelson, quiero cotizar la Miniexcavadora Hitachi con Operador'
  },
  {
    id: 10,
    name: 'Minicargador Bobcat',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Minicargadores industriales de alta eficiencia y versatilidad.',
    specs: [
      { key: 'Marca', val: 'Bobcat' },
      { key: 'Modelos', val: 'S650 / S590' },
      { key: 'Año', val: '2019 / 2025' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Minicargador Bobcat'
  },
  {
    id: 11,
    name: 'Minicargador Bobcat con Martillo Hidráulico',
    category: 'excavacion',
    categoryLabel: 'Excavación',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Minicargadores Bobcat equipados con martillo hidráulico. Ideal para rotura de roca en espacios reducidos.',
    specs: [
      { key: 'Marca', val: 'Bobcat' },
      { key: 'Modelos', val: 'S650 / S590' },
      { key: 'Año minicargador', val: '2019 / 2025' },
      { key: 'Año martillo', val: '2020' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Minicargador Bobcat con Martillo Hidráulico'
  },

  // --- TRANSPORTE ---
  {
    id: 5,
    name: 'Camión Tolva Volkswagen Constellation',
    category: 'transporte',
    categoryLabel: 'Transporte',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Camión tolva para retiro de escombros y transporte de áridos.',
    specs: [
      { key: 'Marca', val: 'Volkswagen' },
      { key: 'Modelo', val: 'Constellation' },
      { key: 'Año', val: '2021 / 2022' },
      { key: 'Capacidad', val: '16 m³' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Camión Tolva Volkswagen Constellation'
  },
  {
    id: 6,
    name: 'Camión Tolva Sinotruk Sitrak G7',
    category: 'transporte',
    categoryLabel: 'Transporte',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Camión tolva de alta capacidad para faenas exigentes.',
    specs: [
      { key: 'Marca', val: 'Sinotruk' },
      { key: 'Modelo', val: 'Sitrak G7' },
      { key: 'Año', val: '2026' },
      { key: 'Capacidad', val: '22 m³' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Camión Tolva Sinotruk Sitrak G7'
  },
  {
    id: 7,
    name: 'Transporte de Carga Especializada',
    category: 'transporte',
    categoryLabel: 'Transporte',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Servicio especializado en el traslado de carga agrícola y materiales pesados.',
    specs: [
      { key: 'Tipo', val: 'Carga Especial' },
      { key: 'Servicio', val: 'Traslado' },
    ],
    waText: 'Hola Nelson, quiero cotizar el servicio de transporte de carga especializada'
  },

  // --- OTROS ---
  {
    id: 8,
    name: 'Remolque Industrial para Maquinaria Pesada',
    category: 'otros',
    categoryLabel: 'Otros',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Remolque industrial para traslado de maquinaria pesada.',
    specs: [
      { key: 'Marca', val: 'Tremac' },
      { key: 'Modelo', val: 'RTCB 18 2 R' },
      { key: 'Tipo', val: 'Cama Baja' },
      { key: 'Año', val: '2016' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Remolque Industrial Tremac'
  },
  {
    id: 9,
    name: 'Remolque',
    category: 'otros',
    categoryLabel: 'Otros',
    badge: 'available',
    badgeLabel: 'Disponible',
    desc: 'Remolque para traslado de minicargador, miniexcavadora y maquinaria pequeña.',
    specs: [
      { key: 'Uso', val: 'Maquinaria pequeña' },
      { key: 'Año', val: '2017' },
    ],
    waText: 'Hola Nelson, quiero cotizar el Remolque'
  }
];

// Lo que ofrecemos — servicios principales
export const OFFERED_SERVICES = [
  { icon: '🏗️', title: 'Movimiento de Tierra', desc: 'Excavaciones, rellenos y nivelaciones para todo tipo de proyecto.' },
  { icon: '💥', title: 'Demoliciones', desc: 'Demolición controlada de estructuras con maquinaria especializada.' },
  { icon: '🚛', title: 'Transporte de Carga', desc: 'Retiro y traslado de tierra, escombros y materiales varios' },
  { icon: '🔧', title: 'Arriendo de Maquinaria', desc: 'Arriendo de excavadoras, minicargadores, miniexcavadoras y más, con operador.' },
  { icon: '🪨', title: 'Compactaciones', desc: 'Compactación de suelos para bases y fundaciones de obras civiles.' },
  { icon: '⚖️', title: 'Compra y Venta de Áridos', desc: 'Comercialización de áridos para construcción y proyectos viales.' },
  { icon: '🚜', title: 'Traslado de Maquinaria', desc: 'Traslado seguro de maquinaria pesada y maquinaria pequeña, equipo especializado en camión cama baja.' },
  { icon: '🚗', title: 'Arriendo de Vehículos', desc: 'Arriendo de camiones tolva y vehículos de carga para tus faenas, con conductor.' },
];

// Proceso de cotización
export const SERVICES = [
  { num: '01', title: 'Cotización', desc: 'Cuéntanos qué maquinaria o vehículo necesitas y cuándo. Respuesta en menos de una hora vía WhatsApp.' },
  { num: '02', title: 'Presupuesto', desc: 'Te enviamos un presupuesto personalizado a la brevedad vía correo electrónico o WhatsApp.' },
  { num: '03', title: 'Coordinación', desc: 'Aceptas el presupuesto vía correo electrónico o WhatsApp y coordinamos el servicio.' },
  { num: '04', title: 'Despacho', desc: 'Coordinamos el traslado y la maquinaria llega a tu faena lista para operar.' }
];

// Por qué elegirnos
export const WHY_CHOOSE_US = [
  { title: 'Flota 100% Segura — Maquinaria y Vehículos', desc: 'Toda nuestra flota está en perfecto estado operativo, con mantención preventiva y revisiones periódicas.' },
  { title: 'Operadores y Conductores Calificados', desc: 'Nuestro equipo humano cuenta con experiencia comprobada y las certificaciones necesarias para cada faena.' },
  { title: 'Maquinaria Certificada', desc: 'Equipos con documentación al día, seguros vigentes y certificaciones técnicas.' },
  { title: 'Responsabilidad', desc: 'Cumplimos los plazos y condiciones acordadas. Nos hacemos cargo de cada faena con seriedad y compromiso.' },
  { title: 'Soporte 24/7', desc: 'Atención permanente para emergencias y coordinación en cualquier momento del día.' },
];

export const STATS = [
  { num: '10+ Años', label: 'Experiencia' },
  { num: '24/7', label: 'Soporte' },
];

// WhatsApp — solo Nelson, solo al final
export const WA_CONTACT = {
  name: 'Nelson Ortega',
  role: 'Jefe en Terreno',
  phone: '+56971952395',
};

export const waLink = (text = 'Hola Nelson, necesito información sobre servicios de TRANSGASPI') =>
  `https://wa.me/${WA_CONTACT.phone}?text=${encodeURIComponent(text)}`;
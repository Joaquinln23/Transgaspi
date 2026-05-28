export const COMPANY = {
  name: "Transportes y Servicios GASPI SpA", 
  fantasyName: "TRANSGASPI SpA",
  slogan: "Donde todo gran proyecto comienza",
  address: "Los Quincheros N°550, Lo Barnechea, Chile",
  email: "contacto.transgaspi@gmail.com",
  gerencia: "Maritza Ortega Espinoza",
  contacts: {
    nelson: { name: 'Nelson Ortega', role: 'Jefe en Terreno', phone: '+569 7195 2395' },
    maritza: { name: 'Maritza Ortega', role: 'Gerente General', phone: '+569 9579 1452' }
  }
};

export const IMAGES = {
  heroVideo: '/assets/HeroVideo1.mp4',
  headerGrua: '/assets/maquinarias/volswagen2.jpeg',
  porque: '/assets/maquinarias/faena6.jpeg',
  maquinaria: {
    'Excavadora Doosan DX 140LC': '/assets/maquinarias/doosan5.jpg',
    'Camión Tolva VW Constellation': '/assets/maquinarias/volswagen1.jpeg',
    'Retroexcavadora New Holland': '/assets/maquinarias/newholland1.jpeg',
    'Camión Tolva Sinotruk Sitrak G7': '/assets/maquinarias/sitrak2.jpeg',
    'Excavadora con Martillo Hidráulico': '/assets/maquinarias/doosan4.jpeg',
    'Remolque Tremac RTCB 18 2 R': '/assets/maquinarias/transporte2.jpeg',
    'Transporte de Carga Especializada': '/assets/maquinarias/fardos.jpg',
    'Miniexcavadora Hitachi': '/assets/maquinarias/hitachi1.jpeg',
    'Remolque minicargador y miniexcavadora': '/assets/maquinarias/transporte1.jpeg',
    'Minicargador Bobcat S650': '/assets/maquinarias/bobcat6.jpeg',
    'Minicargador Bobcat S590 con Martillo Hidráulico': '/assets/maquinarias/bobcat2.jpeg',
  }
};

export const PROJECTS = [
  {
    id: 1,
    client: 'Constructora Bitumix',
    projects: ['Obras plan verano'],
    services: ['Calzadas', 'Calles (Lo Barnechea, Vitacura, General Velásquez)'],
    image: '/assets/logomarcas/bitumix.png'
  },
  {
    id: 2,
    client: 'Constructora IBL',
    projects: ['Condominios', 'Casas (Colina, Lo Barnechea)'],
    services: ['Obras varias'],
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
    client: 'Medialuna Gil Letelier',
    projects: ['Lo Barnechea', 'Peldehue', 'Colina', 'Santa Filomena'],
    services: ['Reparaciones medialuna (piso y compactación)'],
    image: '/assets/logomarcas/gil-letelier.svg'
  },
  {
    id: 5,
    client: 'Constructora C1 LIMITADA',
    projects: ['Carolina Rabat', 'QIUT', 'Lomas de la dehesa', 'Obras varias'],
    services: ['Movimiento de tierra', 'Demoliciones', 'Traslado de materiales', 'Traslado de áridos'],
    image: '/assets/logomarcas/C1.jpg'
  },
  {
    id: 6,
    client: 'CLUB DE GOLF LOMAS LA DEHESA',
    projects: ['Obra Club de Golf', 'Obras varias'],
    services: ['Movimiento de tierra', 'Demoliciones', 'Traslado de materiales', 'Traslado de áridos'],
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
    client: 'CHINA RAILWAY TUNNEL GROUP CO., LTD SUCURSAL CHILE',
    projects: ['Pique Santa Cruz', 'Hospital del Pino', 'Metro estaciones varias'],
    services: ['Movimiento de tierra', 'Excavaciones', 'Arriendo de maquinaria'],
    image: '/assets/logomarcas/crtg.jpg'
  },
  {
    id: 9,
    client: 'Ingex Limitada',
    projects: ['San Cristóbal'],
    services: ['Movimiento de tierra', 'Demoliciones'],
    image: '/assets/logomarcas/ingex.jpg'
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
  { label: 'Proceso', href: '#proceso' },
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
    id: 1, name: 'Excavadora Doosan DX 140LC', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Excavadora de alto tonelaje para excavación general.',
    specs: [{ key: 'Marca', val: 'Doosan' }, { key: 'Modelo', val: 'DX 140LC' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Excavadora Doosan DX 140LC'
  },
  {
    id: 2, name: 'Excavadora con Martillo Hidráulico', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Excavadora equipada con martillo para rotura de roca y demoliciones pesadas.',
    specs: [{ key: 'Marca', val: 'Hitachi' }, { key: 'Modelo', val: 'ZX60C 5A' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Excavadora con Martillo Hidráulico'
  },
  {
    id: 3, name: 'Retroexcavadora New Holland', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Máquina versátil para obras civiles y movimiento de tierra.',
    specs: [{ key: 'Marca', val: 'New Holland' }, { key: 'Año', val: '2018' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Retroexcavadora New Holland'
  },
  {
    id: 4, name: 'Miniexcavadora Hitachi', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Miniexcavadora para trabajos de precisión en espacios reducidos.',
    specs: [{ key: 'Marca', val: 'Hitachi' }, { key: 'Modelo', val: 'ZX60C' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Miniexcavadora Hitachi'
  },
  {
    id: 10, 
    name: 'Minicargador Bobcat S650', 
    category: 'excavacion', 
    categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Minicargador industrial, alta eficiencia y versatilidad.',
    specs: [{ key: 'Marca', val: 'Bobcat' }, { key: 'Modelo', val: 'S650' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar el Minicargador Bobcat S650'
  },
  {
    id: 11, 
    name: 'Minicargador Bobcat S590 con Martillo Hidráulico', 
    category: 'excavacion', 
    categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Minicargador industrial equipado con martillo, ideal para demoliciones en espacios reducidos.',
    specs: [{ key: 'Marca', val: 'Bobcat' }, { key: 'Accesorio', val: 'Martillo' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar el Minicargador Bobcat S590 con Martillo Hidráulico'
  },

  // --- TRANSPORTE ---
  {
    id: 5, name: 'Camión Tolva VW Constellation', category: 'transporte', categoryLabel: 'Transporte',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Camión de alto tonelaje (16 m3) para retiro de escombros y transporte de áridos.',
    specs: [{ key: 'Marca', val: 'VW' }, { key: 'Modelo', val: 'Constellation' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Camión Tolva VW Constellation'
  },
  {
    id: 6, name: 'Camión Tolva Sinotruk Sitrak G7', category: 'transporte', categoryLabel: 'Transporte',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Camión tolva de alta capacidad (22 m3) año 2026 para faenas exigentes.',
    specs: [{ key: 'Marca', val: 'Sinotruk' }, { key: 'Capacidad', val: '22 m3' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Camión Tolva Sinotruk Sitrak G7'
  },
  {
    id: 7, name: 'Transporte de Carga Especializada', category: 'transporte', categoryLabel: 'Transporte',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Servicio especializado en el traslado de carga agrícola y materiales pesados.',
    specs: [{ key: 'Tipo', val: 'Carga Especial' }, { key: 'Servicio', val: 'Traslado' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el transporte de carga'
  },

  // --- OTROS ---
  {
    id: 8, name: 'Remolque Tremac RTCB 18 2 R', category: 'otros', categoryLabel: 'Otros',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Remolque industrial para traslado de maquinaria.',
    specs: [{ key: 'Marca', val: 'Tremac' }, { key: 'Tipo', val: 'Cama Baja' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Remolque Tremac'
  },
  {
    id: 9, name: 'Remolque minicargador y miniexcavadora', category: 'otros', categoryLabel: 'Otros',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Remolque para traslado de minicargador y miniexcavadora.',
    specs: [{ key: 'Uso', val: 'Maquinaria pequeña' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Remolque minicargador y miniexcavadora'
  }
];

export const SERVICES = [
  { num: '01', title: 'Cotización', desc: 'Respuesta en menos de una hora vía WhatsApp para conversar y entender tu requerimiento.' },
  { num: '02', title: 'Presupuesto', desc: 'Te enviamos un presupuesto personalizado a la brevedad vía correo electrónico.' },
  { num: '03', title: 'Coordinación', desc: 'Aceptas el presupuesto vía correo electrónico o WhatsApp y coordinamos el servicio.' },
  { num: '04', title: 'Despacho', desc: 'Coordinamos el traslado y la maquinaria llega a tu faena lista para operar.' }
];

export const STATS = [
  { num: '10+ Años', label: 'Experiencia' },
  { num: '24/7', label: 'Soporte' },
];

export const waLink = (phone = '+56995791452', text = 'Hola, necesito información sobre servicios') => 
  `https://wa.me/${phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent(text)}`;
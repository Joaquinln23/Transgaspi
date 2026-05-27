export const COMPANY = {
  name: "Transportes y Servicios GASPI",
  fantasyName: "TRANSGASPI SpA",
  slogan: "Donde todo gran proyecto comienza",
  address: "Los Quincheros N°550, Lo Barnechea, Chile",
  email: "contacto.transgaspi@gmail.com",
  gerencia: "Maritza Ortega Espinoza",
  contacts: {
    maritza: { name: 'Maritza Ortega', role: 'Gerente General', phone: '+569 9579 1452' },
    nelson: { name: 'Nelson Ortega', role: 'Jefe en Terreno', phone: '+569 7195 2395' }
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
    'Minicargador Bobcat': '/assets/maquinarias/bobcat6.jpeg',
    'Camión Tolva Sinotruk Sitrak G7': '/assets/maquinarias/sitrak2.jpeg',
    'Excavadora con Martillo Hidráulico': '/assets/maquinarias/doosan4.jpeg',
    'Minicargador Bobcat S590': '/assets/maquinarias/bobcat2.jpeg',
    'Remolque Tremac RTCB 18 2 R': '/assets/maquinarias/transporte2.jpeg',
    'Transporte de Carga Especializada': '/assets/maquinarias/fardos.jpg',
  }
};

export const PROJECTS = [
  {
    id: 1,
    client: 'Constructora Bitumix',
    desc: 'Obras plan verano: calzadas, calles (Comunas Lo Barnechea, Vitacura, General Velásquez).',
    image: '/assets/logomarcas/bitumix.png'
  },
  /*{
    id: 2,
    client: 'Constructora Francisco Estrada',
    desc: 'Construcción de condominios y edificios en varias comunas del sector oriente de Santiago.',
    image: '/assets/logomarcas/estrada.jpg'
  },*/
  {
    id: 3,
    client: 'Constructora IBL',
    desc: 'Obras varias en condominios y casas (Colina, Lo Barnechea).',
    image: '/assets/logomarcas/ConstructoraIBL.png'
  },
  {
    id: 4,
    client: 'Restaurante Chilenazo',
    desc: 'Servicios de demolición de estacionamientos.',
    image: '/assets/logomarcas/chilenazo.png'
  },
  {
    id: 5,
    client: 'Medialunas Gil Letelier',
    desc: 'Reparaciones en Lo Barnechea, Santa Filomena y Colina.',
    image: '/assets/logomarcas/gil-letelier.svg'
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
  /*{ label: 'Testimonios', href: '#testimonios' },*/
];

export const FILTER_TABS = [
  { label: 'Todas', key: 'all' },
  { label: 'Excavación', key: 'excavacion' },
  { label: 'Transporte', key: 'transporte' },
  { label: 'Otros', key: 'otros' },
];

export const MACHINES = [
  {
    id: 1, name: 'Excavadora Doosan DX 140LC', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Excavadora equipada con baldes de carga y martillos hidráulicos. Ideal para rotura de roca y excavación.',
    specs: [{ key: 'Modelo', val: 'DX 140LC' }, { key: 'Marca', val: 'Doosan' }, { key: 'Año', val: '2015' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Excavadora Doosan DX 140LC'
  },
  {
    id: 2, name: 'Camión Tolva VW Constellation', category: 'transporte', categoryLabel: 'Transporte',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Camión de alto tonelaje para retiro de escombros y transporte de áridos. Capacidad 16 m3.',
    specs: [{ key: 'Modelo', val: 'Constellation' }, { key: 'Marca', val: 'VW' }, { key: 'Año', val: '2021-2022' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Camión Tolva VW Constellation'
  },
  {
    id: 3, name: 'Retroexcavadora New Holland', category: 'excavacion', categoryLabel: 'Excavación',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Máquina versátil para obras civiles y movimiento de tierra.',
    specs: [{ key: 'Marca', val: 'New Holland' }, { key: 'Año', val: '2018' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar la Retroexcavadora New Holland'
  },
  {
    id: 4, name: 'Minicargador Bobcat', category: 'otros', categoryLabel: 'Otros',
    badge: 'available', badgeLabel: 'Disponible',
    desc: 'Equipado con martillo, aguillón y uñeta. Ideal para espacios reducidos.',
    specs: [{ key: 'Marca', val: 'Bobcat' }, { key: 'Año', val: '2019' }],
    price: 'Consultar', waText: 'Hola, quiero cotizar el Minicargador Bobcat'
  },
    {
    id: 5, 
    name: 'Minicargador Bobcat S590', 
    category: 'otros', 
    categoryLabel: 'Otros',
    badge: 'available', 
    badgeLabel: 'Disponible',
    desc: 'Minicargador industrial de alto rendimiento, ideal para espacios reducidos.',
    specs: [{ key: 'Modelo', val: 'S590' }, { key: 'Marca', val: 'Bobcat' }, { key: 'Año', val: '2025' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar el Minicargador Bobcat S590'
  },
  {
    id: 6, 
    name: 'Excavadora con Martillo Hidráulico', 
    category: 'excavacion', 
    categoryLabel: 'Excavación',
    badge: 'available', 
    badgeLabel: 'Disponible',
    desc: 'Excavadora industrial de gran precisión y eficiencia para movimientos de tierra.',
    specs: [{ key: 'Modelo', val: 'ZX60C 5A' }, { key: 'Marca', val: 'Hitachi' }, { key: 'Año', val: '2022' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar la Excavadora Hitachi ZX60C 5A'
  },
  {
    id: 7, 
    name: 'Remolque Tremac RTCB 18 2 R', 
    category: 'transporte', 
    categoryLabel: 'Transporte',
    badge: 'available', 
    badgeLabel: 'Disponible',
    desc: 'Remolque industrial diseñado para el traslado seguro y eficiente de maquinaria pesada.',
    specs: [{ key: 'Modelo', val: 'RTCB 18 2 R' }, { key: 'Marca', val: 'Tremac' }, { key: 'Año', val: '2016' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar el Remolque Tremac'
  },
  {
    id: 8, 
    name: 'Camión Tolva Sinotruk Sitrak G7', 
    category: 'transporte', 
    categoryLabel: 'Transporte',
    badge: 'available', 
    badgeLabel: 'Disponible',
    desc: 'Camión tolva de nueva generación con alta capacidad de carga y potencia para faenas exigentes.',
    specs: [{ key: 'Modelo', val: 'Sitrak G7 Faena' }, { key: 'Marca', val: 'Sinotruk' }, { key: 'Año', val: '2026' }],
    price: 'Consultar', 
    waText: 'Hola, quiero cotizar el Camión Tolva Sinotruk Sitrak G7'
  },
  {
  id: 9, 
  name: 'Transporte de Carga Especializada', 
  category: 'transporte', 
  categoryLabel: 'Transporte',
  badge: 'available', 
  badgeLabel: 'Disponible',
  desc: 'Servicio especializado en el traslado de carga agrícola y materiales pesados con total seguridad.',
  specs: [
    { key: 'Tipo', val: 'Carga Agrícola' }, 
    { key: 'Servicio', val: 'Traslado' }
  ],
  price: 'Consultar', 
  waText: 'Hola, quiero cotizar el servicio de transporte de carga especializada'
}
];

export const SERVICES = [
    { num: '01', title: 'Cotización', desc: 'Te enviamos tu presupuesto personalizado con todos los detalles vía correo electrónico.' },
  { num: '02', title: 'Aceptación', desc: 'Aceptas la cotización o presupuesto vía correo electrónico.' },
  { num: '03', title: 'Coordinación', desc: 'Coordinamos el traslado de la maquinaria a tu faena según lo acordado.' },
  { num: '04', title: 'Operación', desc: 'La maquinaria llega a tu obra lista para operar.' }
];

export const STATS = [
  { num: '10+ Años', label: 'Experiencia' },
  { num: '24/7', label: 'Soporte' },
];

export const waLink = (phone = '+56995791452', text = 'Hola, necesito información sobre servicios') => 
  `https://wa.me/${phone.replace(/[\s+]/g, '')}?text=${encodeURIComponent(text)}`;

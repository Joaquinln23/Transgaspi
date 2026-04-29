export const COMPANY = {
  name: "Transportes y Servicios GASPI",
  fantasyName: "TRANSGASPI SpA",
  slogan: "Donde todo gran proyecto comienza",
  address: "Los Quincheros N°550, Lo Barnechea, Chile",
  email: "contacto.transgaspi@gmail.com",
  gerencia: "Maritza Ortega Espinoza",
  contacts: {
    maritza: { name: 'Maritza Ortega', role: 'Gerente General', phone: '+569 5791 4521' },
    nelson: { name: 'Nelson Ortega', role: 'Jefe en Terreno', phone: '+569 7195 2395' }
  }
};

export const IMAGES = {
  headerGrua: '/assets/maquinarias/volswagen2.jpeg',
  porque: '/assets/Porque.jpg',
  maquinaria: {
    'Excavadora Doosan DX 140LC': '/assets/maquinarias/doosan1.jpeg',
    'Camión Tolva VW Constellation': '/assets/maquinarias/volswagen2.jpeg',
    'Retroexcavadora New Holland': '/assets/maquinarias/newholland1.jpeg',
    'Minicargador Bobcat': '/assets/maquinarias/bobcat6.jpeg'
  }
};

export const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Maquinaria', href: '#maquinaria' },
  { label: 'Nosotros', href: '#por-que' },
  { label: 'Proceso', href: '#proceso' },
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
    desc: 'Camión de alto tonelaje para retiro de escombros y transporte de áridos. Capacidad 15-16 m3.',
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
  }
];

export const SERVICES = [
    { num: '01', title: 'Transporte en general', desc: 'Servicio de transporte de carga para todo tipo de bienes, nacionales o extranjeros.' },
    { num: '02', title: 'Venta de Materiales Áridos', desc: 'Comercialización y distribución de áridos de alta calidad para construcción.' },
    { num: '03', title: 'Movimientos de Tierra', desc: 'Preparación de suelos y excavaciones integrales para obras civiles.' },
    { num: '04', title: 'Excavaciones y demoliciones', desc: 'Servicios de demolición y excavación con maquinaria certificada.' },
    { num: '05', title: 'Arriendo de Maquinaria', desc: 'Arriendo y sub arriendo de maquinaria pesada para la construcción.' }
];

export const STATS = [
  { num: '10+ Años', label: 'Experiencia' },
  { num: '24/7', label: 'Soporte' },
];

export const waLink = (phone = '+56957914521', text = 'Hola, necesito información sobre servicios') => 
  `https://wa.me/${phone.replace(/\s+/g, '')}?text=${encodeURIComponent(text)}`;
